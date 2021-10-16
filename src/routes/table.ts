interface Team {
  team: string;
  points: number;
  win: number;
  draw: number;
  loss: number;
  gf: number;
  ga: number;
  gd: number;
}

export async function get(): Promise<{ body: { table: Team[] } }> {
  const body = await fetch(
    'https://en.wikipedia.org/w/api.php?action=parse&format=json&page=2021%E2%80%9322_Premier_League&prop=wikitext&section=5&disabletoc=1'
  ).then((r) => r.json());

  const wikitext: string = body.parse.wikitext['*'];

  const table = wikitext
    .split('\n')
    .filter((line) => line.startsWith('|win_'))
    .map((line, i) => {
      const spl = line
        .replace(/^\|/, '')
        .replace('<!--', '|')
        .replace('-->', '')
        .trim()
        .split(/\s?\|\s?/);

      const team = spl[0].split('=')[0].split('_')[1];
      const team_name = spl[5];
      const win = Number(spl[0].replace(`win_${team}=`, ''));
      const draw = Number(spl[1].replace(`draw_${team}=`, ''));
      const loss = Number(spl[2].replace(`loss_${team}=`, ''));
      const gf = Number(spl[3].replace(`gf_${team}=`, ''));
      const ga = Number(spl[4].replace(`ga_${team}=`, ''));
      const played = win + draw + loss;
      const points = win * 3 + draw;
      const gd = gf - ga;

      return {
        team,
        team_name,
        played,
        points,
        win,
        draw,
        loss,
        gf,
        ga,
        gd,
      };
    })
    .sort((a, b) => b.points - a.points)
    .map((team, i) => {
      return {
        pos: i + 1,
        ...team,
      };
    });

  return {
    body: { table },
  };
}
