import * as cheerio from 'cheerio';

interface Form {
  outcome?: string;
  result?: string;
}
interface Team {
  pos?: number;
  team?: string;
  team_name?: string;
  played?: number;
  points?: number;
  wins?: number;
  draws?: number;
  losses?: number;
  gf?: number;
  ga?: number;
  gd?: number;
  form?: Form[];
}

export async function get(): Promise<{ body: { table: Team[] } }> {
  const body = await fetch(
    'https://www.skysports.com/premier-league-table'
  ).then((r) => r.text());
  const $ = cheerio.load(body);

  const table = $('.standing-table__table > tbody > tr')
    .get()
    .map((el): Team => {
      const cells = $(el).find('td.standing-table__cell').get();

      const pos = Number($(cells[0]).text().trim());
      const team_name = $(cells[1]).text().trim();
      const played = Number($(cells[2]).text().trim());
      const points = Number($(cells[9]).text().trim());
      const wins = Number($(cells[3]).text().trim());
      const draws = Number($(cells[4]).text().trim());
      const losses = Number($(cells[5]).text().trim());
      const gf = Number($(cells[6]).text().trim());
      const ga = Number($(cells[7]).text().trim());
      const gd = Number($(cells[8]).text().trim());

      const form = $(cells[10])
        .find('.standing-table__form-cell')
        .get()
        .map((game): Form => {
          const outcome = $(game)
            .attr('class')
            .replace(
              'standing-table__form-cell standing-table__form-cell--',
              ''
            );

          const result = $(game).attr('title');

          return { outcome, result };
        });

      return {
        pos,
        team_name,
        played,
        points,
        wins,
        draws,
        losses,
        gf,
        ga,
        gd,
        form,
      };
    });

  return {
    body: { table },
  };
}
