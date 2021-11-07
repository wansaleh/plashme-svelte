<script>
  import { format } from 'date-fns';

  let date = new Date();
  setInterval(() => {
    date = new Date();
  }, 100);
</script>

<div
  class="relative text-[12vw] tracking-tight flex justify-end items-center text-center leading-none font-clock font-bold -mr-2"
>
  <span class="w-[1.2em] text-right">{format(date, 'hh')}</span>

  <span class="-mt-10 mx-2.5 opacity-25">:</span>

  <span class="">{format(date, 'mm')}</span>

  <span class="-mt-10 mx-2.5 opacity-25">:</span>

  <div class="flex flex-col w-[0.8em] leading-[0.85] tracking-normal">
    <span class="text-[0.65em]">{format(date, 'ss')}</span>
    <span class="text-[0.3em] font-thin tracking-widest"
      >{format(date, 'a')}</span
    >
  </div>
</div>

<div
  class="mr-0 mt-0 text-[4vw] font-extralight tracking-normal text-right flex justify-end"
>
  {format(date, 'iiii, LLLL d, yyy')}
</div>
