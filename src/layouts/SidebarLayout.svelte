<script lang="ts">
	import MenuIcon from '../components/icons/MenuIcon.svelte';
	import CodeIcon from '../components/icons/CodeIcon.svelte';
	import GithubFilledIcon from '../components/icons/GithubFilledIcon.svelte';
	import GooglePlayFilled from '../components/icons/GooglePlayFilled.svelte';
	import HomeBorderIcon from '../components/icons/HomeBorderIcon.svelte';
	import XIcon from '../components/icons/XIcon.svelte';
	import LinkedinIcon from '../components/icons/LinkedinIcon.svelte';
	import { twMerge } from 'tailwind-merge';

	export let pathname: string;

	let sidebarState: 'fixed' | 'hidden' | 'drawer' = 'fixed';
	let width;

	$: showIfPosible = false;
	$: isSmallerThanLG = width <= 1024;

	$: {
		if (showIfPosible && isSmallerThanLG) {
			sidebarState = 'drawer';
		} else if (isSmallerThanLG) {
			sidebarState = 'hidden';
		} else {
			sidebarState = 'fixed';
		}
	}

	$: {
		if (!isSmallerThanLG && showIfPosible) {
			showIfPosible = false;
		}
	}
</script>

<svelte:window bind:innerWidth={width} />

<body class="flex min-h-screen w-full flex-row">
	{#if sidebarState !== 'hidden'}
		<aside
			class={twMerge(
				sidebarState === 'drawer'
					? 'bg-dark-blue fixed flex min-h-screen w-64 shrink-0 flex-col border-r border-gray-700 shadow-2xl shadow-black before:absolute before:top-1/2 before:left-64 before:h-full before:w-screen before:-translate-y-1/2 before:bg-gray-400 before:opacity-20'
					: 'fixed flex min-h-screen w-64 shrink-0 flex-col border-r border-gray-700 max-lg:hidden'
			)}
		>
			<div class="flex flex-row items-center justify-between border-b border-gray-700 p-2 shadow">
				<a class="text-xl font-bold text-white" href="/">Puntogris </a>
				{#if isSmallerThanLG}
					<button
						on:click={() => (showIfPosible = !showIfPosible)}
						class="rounded-md p-1 text-gray-400 hover:bg-gray-800"
					>
						<XIcon class="size-4 text-gray-400" />
					</button>
				{/if}
			</div>
			<nav class="flex flex-col px-4 py-3">
				<a
					class={twMerge(
						'relative flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-white hover:bg-gray-800',
						pathname === '/'
							? 'bg-gray-700/30 before:absolute before:top-1/2 before:-left-2 before:h-6 before:w-1 before:-translate-y-1/2 before:rounded before:bg-blue-500 hover:bg-gray-800'
							: ''
					)}
					href="/"
				>
					<HomeBorderIcon class="size-4 text-gray-400" />
					Home
				</a>
				<a
					class={twMerge(
						'relative flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-white hover:bg-gray-800',
						pathname.includes('/projects')
							? 'bg-gray-700/30 before:absolute before:top-1/2 before:-left-2 before:h-6 before:w-1 before:-translate-y-1/2 before:rounded before:bg-blue-50'
							: ''
					)}
					href="/projects"
				>
					<CodeIcon class="size-4 text-gray-400" />
					Projects
				</a>

				<h2 class="mt-1 p-2 text-xs font-bold text-gray-400">Social</h2>
				<a
					class="flex items-center gap-x-2.5 rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
					href="https://github.com/puntogris"
					target="_blank"
				>
					<GithubFilledIcon class="size-4 text-gray-400" />
					Github <span class="text-xs text-gray-500">@puntogris</span></a
				>
				<a
					class="flex items-center gap-x-2.5 rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
					href="https://play.google.com/store/apps/dev?id=9215074992728346327&hl=en&gl=US"
				>
					<GooglePlayFilled class="size-4 text-gray-400" />
					Google Play<span class="text-xs text-gray-500">@puntogris</span></a
				>
				<a
					class="flex items-center gap-x-2.5 rounded px-2 py-1.5 text-sm text-white hover:bg-gray-800"
					href="https://www.linkedin.com/in/joaquin-mu%C3%B1iz/"
					target="_blank"
				>
					<LinkedinIcon class="size-4 text-gray-400" />
					Linkedin <span class="text-xs text-gray-500">@joaquin-muñiz</span></a
				>
			</nav>
			<div class="mt-auto border-t border-gray-700 px-4 py-2 text-center text-sm text-gray-500">
				Copyright © 2025 Puntogris
			</div>
		</aside>
	{/if}
	<div class="ml-0 w-full px-3 py-2 lg:ml-64">
		<div class="flex h-10 items-center">
			{#if isSmallerThanLG}
				<button
					on:click={() => (showIfPosible = !showIfPosible)}
					class="block rounded-md p-1.5 text-gray-400 hover:bg-gray-800"
				>
					<MenuIcon class="size-5 text-gray-400" />
				</button>
			{/if}
		</div>
		<div class="container mx-auto max-w-3xl px-0 lg:px-4">
			<slot />
		</div>
	</div>
</body>
