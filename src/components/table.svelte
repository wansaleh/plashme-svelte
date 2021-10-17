<script>
  import { useSWR } from 'sswr';

  const { data } = useSWR('/table');
</script>

<div class="leading-snug bg-black bg-opacity-60 rounded-xl p-2 text-sm">
  <table class="table-auto text-left">
    <thead class="border-b border-opacity-40">
      <tr>
        <th>Pos</th>
        <th>Team</th>
        <th>P</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>GF</th>
        <th>GA</th>
        <th>GD</th>
        <th>Pts</th>
      </tr>
    </thead>
    <tbody>
      {#each $data?.table?.slice(0, 6) ?? [] as team}
        <tr>
          <td>{team.pos}</td>
          <td class="font-bold">{team.team_name}</td>
          <td>{team.played}</td>
          <td>{team.win}</td>
          <td>{team.draw}</td>
          <td>{team.loss}</td>
          <td>{team.gf}</td>
          <td>{team.ga}</td>
          <td>{team.gd}</td>
          <td class="font-bold">{team.points}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style lang="postcss">
  th,
  td {
    @apply px-2 py-1;
  }
  td:is(:nth-child(1), :nth-child(n + 3)) {
    @apply text-right;
  }
</style>
