<script lang="ts">
  export let showIfPosible: boolean;
  export let pathname: string;
  export let isSmallerThanLG: boolean;

  let sidebarStyle: string | null;

  $: {
    if (showIfPosible && isSmallerThanLG) {
      sidebarStyle =
        "bg-dark-blue shadow-2xl shadow-black fixed flex min-h-screen w-64 shrink-0 flex-col border-r border-gray-700 before:absolute before:left-64 before:top-1/2 before:h-full before:w-screen before:-translate-y-1/2 before:bg-gray-400 before:bg-opacity-20";
    } else if (isSmallerThanLG) {
      sidebarStyle = null;
    } else {
      sidebarStyle =
        "fixed flex min-h-screen w-64 shrink-0 flex-col border-r border-gray-700 max-lg:hidden";
    }
  }

  function getMenuItemStyle(isActive: boolean) {
    if (isActive) {
      return "relative rounded-md bg-gray-700 bg-opacity-30 px-2 py-1.5 text-sm flex items-center gap-x-2 text-white before:absolute before:-left-2 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:rounded before:bg-blue-500 hover:bg-gray-800";
    } else {
      return "relative rounded px-2 py-1.5 text-sm text-white flex items-center gap-x-2 hover:bg-gray-800";
    }
  }
</script>

{#if sidebarStyle}
  <div class={sidebarStyle}>
    <div
      class="flex shadow flex-row items-center justify-between border-b border-gray-700 p-2"
    >
      <a class="text-xl font-bold text-white" href="/">Puntogris </a>
      {#if isSmallerThanLG}
        <button
          on:click={() => (showIfPosible = !showIfPosible)}
          class="text-gray-400 p-1 hover:bg-gray-800 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      {/if}
    </div>

    <nav class="flex flex-col px-4 py-3">
      <a class={getMenuItemStyle(pathname === "/")} href="/">
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          class="text-gray-400"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="currentColor"
          style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"
        >
          <path
            d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z"
          >
          </path>
        </svg>
        Home
      </a>
      <a
        class={getMenuItemStyle(pathname.includes("/projects"))}
        href="/projects"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          class="text-gray-400"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="currentColor"
          style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"
        >
          <path
            d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"
          >
          </path>
        </svg>
        Projects
      </a>

      <h2 class="mt-1 p-2 text-xs font-bold text-gray-400">Social</h2>
      <a
        class="flex items-center gap-x-2.5 rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
        href="https://github.com/puntogris"
        >Github <span class="text-xs text-gray-500">@puntogris</span></a
      >
      <a
        class="flex items-center gap-x-2.5 rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
        href="/"
        >Twitter <span class="text-xs text-gray-500">@puntogris</span></a
      >
      <a
        class="flex items-center gap-x-2.5 rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
        href="/">Google <span class="text-xs text-gray-500">@puntogris</span></a
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
