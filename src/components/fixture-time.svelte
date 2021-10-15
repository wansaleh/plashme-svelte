<script>
  import { format, formatDistanceToNow, parseISO } from 'date-fns';
  export let date;

  let dist = formatDistanceToNow(parseISO(date));

  setInterval(() => {
    dist = formatDistanceToNow(parseISO(date));
  }, 1000);
</script>

<div class="flex justify-end text-base">
  <div
    class="py-0 px-2.5 text-black bg-white rounded-md"
    style="text-shadow: none;"
  >
    {format(parseISO(date), 'iiii, MMMM d, yyy')},
    {format(parseISO(date), 'p')}, in {dist}
  </div>
</div>
