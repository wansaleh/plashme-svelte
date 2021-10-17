<script>
  import { useSWR } from 'sswr';

  const { data } = useSWR('/api/table-sky');
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
        <th>Latest &gt;</th>
      </tr>
    </thead>
    <tbody>
      {#each $data?.table?.slice(0, 6) ?? [] as team}
        <tr>
          <td>{team.pos}</td>
          <td>{team.team_name}</td>
          <td>{team.played}</td>
          <td>{team.wins}</td>
          <td>{team.draws}</td>
          <td>{team.losses}</td>
          <td>{team.gf}</td>
          <td>{team.ga}</td>
          <td>{team.gd}</td>
          <td class="font-bold">{team.points}</td>
          <td>
            <div class="flex -mx-1 items-center">
              {#each team.form as form}
                <div
                  class="mx-0.5 h-3 w-3 rounded-full {form.outcome}"
                  title={form.result}
                />
              {/each}
            </div>
          </td>
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
  th:nth-child(1),
  th:nth-child(n + 3),
  td:nth-child(1),
  td:nth-child(n + 3) {
    @apply text-right;
  }
  .win {
    @apply bg-green-500;
  }
  .draw {
    @apply bg-gray-500;
  }
  .loss {
    @apply bg-red-500;
  }
</style>
