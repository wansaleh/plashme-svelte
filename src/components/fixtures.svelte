<script type="ts">
  import { isAfter, parseISO } from 'date-fns';

  import { useSWR } from 'sswr';
  import FixtureTime from './fixture-time.svelte';
  import type { Fixture } from '../routes/api/theguardian';

  const { data } = useSWR('/api/theguardian');
  let fixtures: Fixture[];
  $: {
    fixtures =
      $data?.fixtures
        ?.filter((fix) => isAfter(parseISO(fix.time), new Date()))
        .slice(0, 3) ?? [];
  }
</script>

<div class="-my-4">
  {#each fixtures as fixture}
    <div class="my-4">
      <div class="flex relative justify-end items-center text-3xl">
        <span
          class="py-0 px-1.5 mr-2 text-xs leading-normal rounded-md border-2 uppercase font-bold tracking-wide"
        >
          {fixture.competition}
        </span>
        <span class="font-light tracking-normal">
          {fixture.homeTeam} <span class="font-thin">vs</span>
          {fixture.awayTeam}
        </span>
      </div>
      <FixtureTime date={fixture.time} />
    </div>
  {/each}
</div>
