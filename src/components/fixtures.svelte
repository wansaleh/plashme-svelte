<script>
  import { onMount } from 'svelte';
  import { useSWR } from 'sswr';
  import FixtureTime from './fixture-time.svelte';

  const { data } = useSWR('/fixtures');
</script>

<div class="mt-4">
  {#each $data?.fixtures?.slice(0, 3) ?? [] as fixture}
    <div class="mt-4 mr-0">
      <div class="flex relative justify-end items-center text-3xl">
        <span class="py-0.5 px-1 mr-2 text-sm leading-none rounded-lg border-2">
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
