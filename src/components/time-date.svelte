<script>
  import { format } from 'date-fns';

  let date = new Date();
  setInterval(() => {
    date = new Date();
  }, 1000);
</script>

<div
  class="text-[14vw] font-bold tracking-tighter flex items-center gap-[0.1em]"
>
  {format(date, 'hh:mm a')}
</div>
<div class="mr-0 -mt-0 text-[3vw] text-right flex justify-end">
  {format(date, 'iiii, LLLL d, yyy')}
</div>
