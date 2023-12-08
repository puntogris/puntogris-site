<script>
  import Sidebar from "./Sidebar.svelte";

  export let pathname;

  let width;
  $: showIfPosible = false;
  $: isSmallerThanLG = width <= 1024;
</script>

<svelte:window bind:innerWidth={width} />

<body class="flex min-h-screen w-full flex-row">
  <Sidebar {pathname} {isSmallerThanLG} bind:showIfPosible />
  <div class="ml-0 w-full lg:ml-64">
    <div class="flex h-10 items-center px-3">
      {#if isSmallerThanLG}
        <button
          on:click={() => (showIfPosible = !showIfPosible)}
          class="block h-6 w-6 rounded-md bg-white">H</button
        >
      {/if}
    </div>
    <div class="container mx-auto min-h-screen max-w-3xl px-0 lg:px-4">
      <slot />
    </div>
  </div>
</body>
