<script>
  export let showIfPosible;
  export let pathname;
  export let isSmallerThanLG;

  let sidebarStyle;

  $: {
    if (showIfPosible && isSmallerThanLG) {
      sidebarStyle =
        "bg-gray-900 fixed flex min-h-screen w-64 shrink-0 flex-col border-r border-gray-700 before:absolute before:left-64 before:top-1/2 before:h-full before:w-screen before:-translate-y-1/2 before:bg-gray-400 before:bg-opacity-30";
    } else if (isSmallerThanLG) {
      sidebarStyle = null;
    } else {
      sidebarStyle =
        "fixed flex min-h-screen w-64 shrink-0 flex-col border-r border-gray-700 max-lg:hidden";
    }
  }
</script>

{#if sidebarStyle}
  <div class={sidebarStyle}>
    <a
      class="border-b border-gray-700 p-2 text-xl font-bold text-white"
      href="/"
      >Puntogris

      {#if isSmallerThanLG}
        <button
          on:click={() => (showIfPosible = !showIfPosible)}
          class="text-white"
        >
          close
        </button>
      {/if}
    </a>

    <nav class="flex flex-col px-4 py-3">
      {#if pathname === "/"}
        <a
          class="relative rounded-md bg-gray-700 bg-opacity-30 px-2 py-1.5 text-sm text-white before:absolute before:-left-2 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:rounded before:bg-blue-500 hover:bg-gray-800"
          href="/"
        >
          Home
        </a>
      {:else}
        <a
          class="relative rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
          href="/"
        >
          Home
        </a>
      {/if}
      {#if pathname === "/projects"}
        <a
          class="relative rounded-md bg-gray-700 bg-opacity-30 px-2 py-1.5 text-sm text-white before:absolute before:-left-2 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:rounded before:bg-blue-500 hover:bg-gray-800"
          href="/projects"
        >
          Projects
        </a>
      {:else}
        <a
          class="relative rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
          href="/projects"
        >
          Projects
        </a>
      {/if}
      <h2 class="mt-1 p-2 text-xs font-bold text-gray-400">Social</h2>
      <a
        class="flex items-center gap-x-2.5 rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
        href="">Github <span class="text-xs text-gray-500">@puntogris</span></a
      >
      <a
        class="flex items-center gap-x-2.5 rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
        href="">Twitter <span class="text-xs text-gray-500">@puntogris</span></a
      >
      <a
        class="flex items-center gap-x-2.5 rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
        href="">Google <span class="text-xs text-gray-500">@puntogris</span></a
      >
    </nav>
    <div
      class="mt-auto border-t border-gray-700 px-4 py-2 text-center text-sm text-gray-500"
    >
      Copyright © 2024 Puntogris <a
        href="https://baoshuo.ren"
        class="hover:text-blue-400">Inspired by Baoshuo</a
      >
    </div>
  </div>
{/if}