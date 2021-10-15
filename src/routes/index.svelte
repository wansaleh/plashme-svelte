<script>
  import TimeDate from '../components/time-date.svelte';
  import Fixtures from '../components/fixtures.svelte';
</script>

<div
  class="min-h-screen w-screen flex flex-col justify-center items-center leading-none text-white {process
    .env.NODE_ENV === 'development'
    ? 'bg'
    : ''}"
>
  <div class="main-date">
    <TimeDate />
    <Fixtures />
  </div>
</div>

<style>
  .bg {
    background: url(https://source.unsplash.com/collection/9744402/2500x1400)
      no-repeat center/cover;
  }

  .main-date {
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.2);
  }
</style>
