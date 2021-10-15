<script>
  import {
    differenceInHours,
    format,
    formatDistanceToNow,
    formatDistanceToNowStrict,
    parseISO,
  } from 'date-fns';
  export let date;

  let diffHours = differenceInHours(parseISO(date), new Date());
  let dist = formatDistanceToNow(parseISO(date));
  let distStrict = formatDistanceToNowStrict(parseISO(date));

  setInterval(() => {
    diffHours = differenceInHours(parseISO(date), new Date());
    dist = formatDistanceToNow(parseISO(date));
    distStrict = formatDistanceToNowStrict(parseISO(date));
  }, 1000);
</script>

<div class="flex justify-end text-base">
  <div
    class="py-0 px-2.5 text-black bg-white rounded-md"
    style="text-shadow: none;"
  >
    {format(parseISO(date), 'iiii, MMMM d, yyy')},
    {format(parseISO(date), 'p')}, in
    {#if diffHours > 48}
      {distStrict}
    {:else}
      {dist}
    {/if}
  </div>
</div>
