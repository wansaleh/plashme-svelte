<script>
  import TimeDate from '../components/time-date.svelte';
  import Fixtures from '../components/fixtures.svelte';
  import Table from '../components/table.svelte';
  // import AnalogClock from '../components/analog-clock.svelte';
</script>

<div
  class="relative z-10 min-h-screen w-screen flex flex-col justify-center items-center leading-none text-white {process
    .env.NODE_ENV === 'development'
    ? 'bg'
    : ''}"
>
  <div class="absolute inset-0 w-screen h-screen z-0 dark-gradient" />

  <div class="relative z-10">
    <TimeDate />

    <div class="flex items-center justify-end mt-8">
      <Fixtures />
    </div>
  </div>
</div>

<style>
  .bg {
    @apply bg-blue-900;
  }

  .main-date {
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.2);
  }

  .dark-gradient {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.3) 30%,
      rgba(0, 0, 0, 0) 200%
    );
  }
</style>
