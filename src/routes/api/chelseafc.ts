import { parse, parseISO } from 'date-fns';

interface Fixture {
  competition?: string;
  time?: Date;
  homeTeam?: string;
  awayTeam?: string;
}

export async function get(): Promise<{ body: { fixtures: Fixture[] } }> {
  const data = await fetch(
    'https://opensheet.vercel.app/1tWQYNixeFgEBbNubaAvhG0zHz2xCaA7O30OIdkpx63k/Sheet1'
  ).then((r) => r.json());

  const fixtures = data.map((fix): Fixture => {
    const competition = fix.Competition;
    const time = parse(
      `${fix.Date} ${fix.Time} +00`,
      'M/d/yyyy HH:mm X',
      new Date()
    );

    const teams = fix.Match.split(' v ');

    const homeTeam = teams[0];
    const awayTeam = teams[1];

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
