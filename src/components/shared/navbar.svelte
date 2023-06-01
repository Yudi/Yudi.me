<script lang="ts">
	import { Menu, Languages, ChevronDown } from 'lucide-svelte';
	import { t, locale } from '$lib/i18n/i18n';

	const items: Items[] = [
		{
			name: 'common.navbar.digitalGarden',
			children: [
				{
					name: 'common.navbar.digitalGarden.personal',
					url: 'https://personal.yudi.me'
				},
				{
					name: 'common.navbar.digitalGarden.studying',
					url: 'https://studying.yudi.me'
				}
			]
		}
	];

	interface Items {
		name: string;
		url?: string;
		children?: {
			name: string;
			url?: string;
		}[];
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="navbar border-b-2 bg-base-100">
	<div class="navbar-start">
		<!-- Mobile -->
		<div class="dropdown">
			<label tabindex="0" class="btn-ghost btn lg:hidden">
				<Menu class="h-5 w-5" />
			</label>
			<ul
				tabindex="0"
				class="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow"
			>
				{#each items as item}
					{#if item.children}
						<li tabindex="0">
							<a class="justify-between">
								{$t(item.name)}
							</a>
							<ul class="p-2">
								{#each item.children as child}
									<li><a href={child.url || undefined}>{$t(child.name)}</a></li>
								{/each}
							</ul>
						</li>
					{:else}
						<li><a href={item.url || undefined}>{item.name}</a></li>
					{/if}
				{/each}
			</ul>
		</div>
		<a class="btn-ghost btn text-xl normal-case" href="/">Yudi</a>
	</div>

	<!-- Desktop -->
	<div class="navbar-end hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each items as item}
				{#if item.children}
					<li tabindex="0" class="dropdown">
						<label tabindex="0">
							{$t(item.name)}
							<ChevronDown class="h-5 w-5" />
						</label>
						<ul class="dropdown-content menu rounded-box bg-base-100 p-2 shadow">
							{#each item.children as child}
								<li><a href={child.url || undefined}>{$t(child.name)}</a></li>
							{/each}
						</ul>
					</li>
				{:else}
					<li><a href={item.url || undefined}>{$t(item.name)}</a></li>
				{/if}
			{/each}
			<li tabindex="0" class="dropdown-end dropdown">
				<label tabindex="0"> <Languages class="h-5 w-5" /></label>
				<ul class="dropdown-content menu rounded-box bg-base-100 p-2 shadow">
					<li><a on:click={() => locale.set('en')}>English</a></li>
					<li><a on:click={() => locale.set('pt')}>Português</a></li>
				</ul>
			</li>
		</ul>
	</div>
</div>
