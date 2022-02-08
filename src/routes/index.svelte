<script>
  import TimeDate from '../components/time-date.svelte';
  import Fixtures from '../components/fixtures.svelte';
  // import Works from '../components/works.svelte';
  // import Table from '../components/table.svelte';
  // import AnalogClock from '../components/analog-clock.svelte';
</script>

<svelte:head>
  <title>Plash</title>
</svelte:head>

<div
  class="relative z-10 min-h-screen w-screen flex flex-col justify-center items-center leading-none text-white {process
    .env.NODE_ENV === 'development'
    ? 'bg'
    : ''}"
>
  <div class="absolute inset-0 w-screen h-screen z-0 dark-gradient" />

  <div class="relative z-10 flex items-end gap-10">
    <div>
      <TimeDate />

      <div class="flex gap-10 justify-end">
        <div class="flex justify-end mt-8">
          <Fixtures />
        </div>
      </div>
    </div>

    <!-- <div class="flex justify-end mt-8">
      <Works />
    </div> -->
  </div>
</div>

<style>
  .bg {
    @apply bg-blue-900;
  }

  .dark-gradient {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.3) 15%,
      rgba(0, 0, 0, 0) 200%
    );
  }
</style>
