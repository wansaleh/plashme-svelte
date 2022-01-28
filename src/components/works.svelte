<script type="ts">
  import { isAfter, parseISO } from 'date-fns';
  import type { Work } from 'src/routes/api/works';

  import { useSWR } from 'sswr';

  const { data } = useSWR<{ works: Work[] }>('/api/works');
  let inProgress: Work[] = [];
  let notStarted: Work[] = [];
  $: {
    inProgress =
      $data?.works.filter((work) => work.status.name === 'In progress') || [];
    notStarted =
      $data?.works.filter((work) => work.status.name === 'Not started') || [];
  }
</script>

<div class="border-4 rounded-xl p-6 -mb-8">
  <!-- <h2 class="text-[2vw] font-bold">Works</h2> -->
  <div class="mb-4 font-bold text-[1.5vw]">Not Started 🔴</div>
  {#each notStarted as work}
    <div class="mt-4 leading-none">
      <div class="text-[1.1vw]">
        <div>{work.title}</div>

        <span class="tracking-normal font-bold text-[0.75em]">
          {work.client.name}
        </span>
      </div>
    </div>
  {/each}

  <div class="mb-4 mt-8 font-bold text-[1.5vw]">In Progress ✅</div>
  {#each inProgress as work}
    <div class="mt-4 leading-none">
      <div class="text-[1.1vw]">
        <div>{work.title}</div>

        <span class="tracking-normal font-bold text-[0.75em]">
          {work.client.name}
        </span>
      </div>
    </div>
  {/each}
</div>
