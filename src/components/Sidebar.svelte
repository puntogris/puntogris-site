<script lang="ts">
  import CodeIcon from "./icons/CodeIcon.svelte";
  import GithubFilledIcon from "./icons/GithubFilledIcon.svelte";
  import GooglePlayFilled from "./icons/GooglePlayFilled.svelte";
  import HomeBorderIcon from "./icons/HomeBorderIcon.svelte";
  import XIcon from "./icons/XIcon.svelte";
  import TwitterFilledIcon from "./icons/TwitterFilledIcon.svelte";

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
  <aside class={sidebarStyle}>
    <div
      class="flex shadow flex-row items-center justify-between border-b border-gray-700 p-2"
    >
      <a class="text-xl font-bold text-white" href="/">Puntogris </a>
      {#if isSmallerThanLG}
        <button
          on:click={() => (showIfPosible = !showIfPosible)}
          class="text-gray-400 p-1 hover:bg-gray-800 rounded-md"
        >
          <XIcon />
        </button>
      {/if}
    </div>

    <nav class="flex flex-col px-4 py-3">
      <a class={getMenuItemStyle(pathname === "/")} href="/">
        <HomeBorderIcon />
        Home
      </a>
      <a
        class={getMenuItemStyle(pathname.includes("/projects"))}
        href="/projects"
      >
        <CodeIcon />
        Projects
      </a>

      <h2 class="mt-1 p-2 text-xs font-bold text-gray-400">Social</h2>
      <a
        class="flex items-center gap-x-2.5 rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
        href="https://github.com/puntogris"
        target="_blank"
      >
        <GithubFilledIcon />
        Github <span class="text-xs text-gray-500">@puntogris</span></a
      >
      <a
        class="flex items-center gap-x-2.5 rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
        href="https://twitter.com/joacojk"
        target="_blank"
      >
        <TwitterFilledIcon />
        Twitter <span class="text-xs text-gray-500">@puntogris</span></a
      >
      <a
        class="flex items-center gap-x-2.5 rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
        href="https://play.google.com/store/apps/dev?id=9215074992728346327&hl=en&gl=US"
      >
        <GooglePlayFilled />
        Google Play<span class="text-xs text-gray-500">@puntogris</span></a
      >
    </nav>
    <div
      class="mt-auto border-t border-gray-700 px-4 py-2 text-center text-sm text-gray-500"
    >
      Copyright © 2024 Puntogris
      <a href="https://baoshuo.ren" class="hover:text-blue-400"
        >Inspired by Baoshuo</a
      >
    </div>
  </aside>
{/if}
