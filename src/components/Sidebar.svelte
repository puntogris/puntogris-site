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
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          class="text-gray-400"
          fill="currentColor"
        >
          <path
            d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
          >
          </path>
        </svg>
        Github <span class="text-xs text-gray-500">@puntogris</span></a
      >
      <a
        class="flex items-center gap-x-2.5 rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
        href="https://twitter.com/joacojk"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          class="text-gray-400"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z"
            stroke-width="0"
            fill="currentColor"
          />
        </svg>
        Twitter <span class="text-xs text-gray-500">@puntogris</span></a
      >
      <a
        class="flex items-center gap-x-2.5 rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
        href="https://play.google.com/store/apps/dev?id=9215074992728346327&hl=en&gl=US"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          class="text-gray-400"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607z"
          />
          <path d="M15 9l-10.5 11.5" />
          <path d="M4.5 3.5l10.5 11.5" />
        </svg>
        Google Play<span class="text-xs text-gray-500">@puntogris</span></a
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
