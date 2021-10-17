<script>
  import { useSWR } from 'sswr';
  import FixtureTime from './fixture-time.svelte';

  const { data: theguardian } = useSWR('/theguardian');
</script>

<div class="-my-4">
  {#each $theguardian?.fixtures?.slice(0, 3) ?? [] as fixture}
    <div class="my-4">
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
