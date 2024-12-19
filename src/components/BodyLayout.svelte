<script>
	import Sidebar from './Sidebar.svelte';
	import MenuIcon from './icons/MenuIcon.svelte';

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
					<MenuIcon size={20} />
				</button>
			{/if}
		</div>
		<div class="container mx-auto max-w-3xl px-0 lg:px-4">
			<slot />
		</div>
	</div>
</body>
