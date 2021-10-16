<script>
  import { format } from 'date-fns';

  let date = new Date();
  setInterval(() => {
    date = new Date();
  }, 1000);
</script>

<div
  class="text-[16vw] font-bold tracking-tighter flex items-center text-center"
>
  <span class="w-[1.2em] text-right">{format(date, 'hh')}</span>
  <span class="">{format(date, ':mm:')}</span>
  <span class="w-[1.2em] text-left">{format(date, 'ss')}</span>
  <span class="font-thin ml-[0.05em]">{format(date, 'a')}</span>
</div>

<div class="mr-0 -mt-4 text-[4vw] text-right flex justify-end">
  {format(date, 'iiii, LLLL d, yyy')}
</div>
