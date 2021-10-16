<script>
  import { onMount } from 'svelte';
  import { useSWR } from 'sswr';
  import FixtureTime from './fixture-time.svelte';

  const { data } = useSWR('/table');
</script>

<div class="mt-8 flex justify-end leading-snug">
  <table class="table-auto">
    <thead class="border-b border-opacity-40">
      <tr>
        <th />
        <th class="text-left">Team</th>
        <th>P</th>
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
          <td class="text-left font-bold">{team.team_name}</td>
          <td>{team.played}</td>
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
  tbody > tr td:nth-child(n + 3) {
    @apply text-right;
  }
</style>
