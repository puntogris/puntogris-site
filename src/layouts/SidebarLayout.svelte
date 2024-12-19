<script>
	import Sidebar from '../components/Sidebar.svelte';
	import MenuIcon from '../components/icons/MenuIcon.svelte';

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
	<div class="ml-0 w-full px-3 py-2 lg:ml-64">
		<div class="flex h-10 items-center">
			{#if isSmallerThanLG}
				<button
					on:click={() => (showIfPosible = !showIfPosible)}
					class="block rounded-md p-1.5 text-gray-400 hover:bg-gray-800"
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
