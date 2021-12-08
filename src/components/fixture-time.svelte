<script>
  import { format, formatDistanceToNow, parseISO } from 'date-fns';
  export let date;

  let dist = formatDistanceToNow(parseISO(date));

  setInterval(() => {
    dist = formatDistanceToNow(parseISO(date));
  }, 1000);
</script>

<div class="flex justify-end text-[1vw] mt-[0.25em] font-light opacity-70">
  <div>
    {format(parseISO(date), 'iiii, MMMM d, yyy')},
    {format(parseISO(date), 'p')}, in {dist}
  </div>
</div>
