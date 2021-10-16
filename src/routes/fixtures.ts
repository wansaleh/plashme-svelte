import * as cheerio from 'cheerio';
import { parseISO } from 'date-fns';

interface Fixture {
  competition: string;
  time: Date;
  homeTeam: string;
  awayTeam: string;
}

export async function get(): Promise<{ body: { fixtures: Fixture[] } }> {
  const body = await fetch(
    'https://www.theguardian.com/football/chelsea/fixtures'
  ).then((r) => r.text());

  const $ = cheerio.load(body);

  const fixtures = $('.football-matches__day')
    .get()
    .map((el): Fixture => {
      const competition = $(el)
        .find('.table__caption .football-matches__heading')
        .text()
        .trim();

      const timeGmt =
        $(el)
          .find('.football-match--fixture .football-match__status > time')
          .attr('datetime') ?? '';

      const homeTeam = $(el)
        .find(
          '.football-match__team.football-match__team--home .football-team__name'
        )
        .text()
        .trim();

      const awayTeam = $(el)
        .find(
          '.football-match__team.football-match__team--away .football-team__name'
        )
        .text()
        .trim();

      const time = parseISO(timeGmt);

      return {
        competition,
        time,
        homeTeam,
        awayTeam,
      };
    });

  return {
    body: { fixtures },
  };
}
