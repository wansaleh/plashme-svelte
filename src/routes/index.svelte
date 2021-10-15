<script>
  import TimeDate from '../components/time-date.svelte';
  import Fixtures from '../components/fixtures.svelte';
</script>

<div
  class="min-h-screen flex flex-col justify-center items-center leading-none text-white"
>
  <div class="main-date">
    <TimeDate />
    <Fixtures />
  </div>
</div>

<style>
  .main-date {
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.2);
  }
</style>
