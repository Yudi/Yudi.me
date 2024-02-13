<script lang="ts">
	import { Menu, Languages, ChevronDown } from 'lucide-svelte';
	import { t, locale } from '$lib/i18n/i18n';

	const items: Items[] = [
		{
			name: 'common.navbar.reviews',
			url: 'https://reviews.yudi.com.br'
		},
		{
			name: 'common.navbar.digitalGarden',
			children: [
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
<div class="navbar bg-base-100">
	<div class="navbar-start">
		<!-- Mobile -->
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<Menu class="h-5 w-5" />
			</label>
			<ul
				tabindex="0"
				class="menu dropdown-content menu-sm mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
			>
				{#each items as item}
					{#if item.children}
						<li tabindex="0">
							<span class="h-12 justify-between pt-3.5">
								{$t(item.name)}
							</span>
							<ul class="p-2">
								{#each item.children as child}
									<li>
										<a class="h-12 pt-3.5" href={child.url || undefined}>{$t(child.name)}</a>
									</li>
								{/each}
							</ul>
						</li>
					{:else}
						<li><a class="h-12 pt-3.5" href={item.url || undefined}>{$t(item.name)}</a></li>
					{/if}
				{/each}
			</ul>
		</div>
		<a class="btn btn-ghost text-xl normal-case" href="/">Yudi</a>
	</div>

	<div class="navbar-end lg:hidden">
		<li tabindex="0" class="dropdown dropdown-end">
			<label tabindex="0" class="btn btn-ghost"> <Languages class="h-5 w-5" /></label>
			<ul class="menu dropdown-content rounded-box bg-base-100 p-2 shadow">
				<li><button class="h-12 pt-3.5" on:click={() => locale.set('en')}>English</button></li>
				<li><button class="h-12 pt-3.5" on:click={() => locale.set('pt')}>Português</button></li>
			</ul>
		</li>
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
						<ul class="menu dropdown-content rounded-box bg-base-100 p-2 shadow">
							{#each item.children as child}
								<li><a href={child.url || undefined}>{$t(child.name)}</a></li>
							{/each}
						</ul>
					</li>
				{:else}
					<li><a href={item.url || undefined}>{$t(item.name)}</a></li>
				{/if}
			{/each}
			<li tabindex="0" class="dropdown dropdown-end">
				<label tabindex="0"> <Languages class="h-5 w-5" /></label>
				<ul class="menu dropdown-content rounded-box bg-base-100 p-2 shadow">
					<li><button on:click={() => locale.set('en')}>English</button></li>
					<li><button on:click={() => locale.set('pt')}>Português</button></li>
				</ul>
			</li>
		</ul>
	</div>
</div>
