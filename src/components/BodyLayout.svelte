<script>
  import Sidebar from "./Sidebar.svelte";

  export let pathname;

  let width;
  $: showIfPosible = false;
  $: isSmallerThanLG = width <= 1024;

  $: {
    if (!isSmallerThanLG && showIfPosible) {
      showIfPosible = false;
    }
  }
</script>

<svelte:window bind:innerWidth={width} />

<body class="flex min-h-screen w-full flex-row">
  <Sidebar {pathname} {isSmallerThanLG} bind:showIfPosible />
  <div class="ml-0 w-full lg:ml-64 py-2 px-3">
    <div class="flex h-10 items-center">
      {#if isSmallerThanLG}
        <button
          on:click={() => (showIfPosible = !showIfPosible)}
          class="block rounded-md text-gray-400 hover:bg-gray-800 p-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={20}
            width={20}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" /><path d="M4 18l16 0" />
          </svg>
        </button>
      {/if}
    </div>
    <div class="container mx-auto min-h-screen max-w-3xl px-0 lg:px-4">
      <slot />
    </div>
  </div>
</body>
