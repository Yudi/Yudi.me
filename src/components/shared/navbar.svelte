<script lang="ts">
	import { ChevronDown, ChevronRight, Menu } from 'lucide-svelte';

	const items: Items[] = [
		{
			name: 'Digital garden',
			children: {
				Pessoal: {
					url: 'https://personal.yudi.me'
				},
				Estudos: {
					url: 'https://studying.yudi.me'
				}
			}
		}
	];

	interface Items {
		name: string;
		children?: {
			[key: string]: {
				url?: string;
			};
		};
		url?: string;
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
				class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
			>
				{#each items as item}
					{#if item.children}
						<li tabindex="0">
							<a class="justify-between">
								{item.name}
								<ChevronRight class="h-5 w-5" />
							</a>
							<ul class="bg-base-100 p-2">
								{#each Object.entries(item.children) as [key, child]}
									<li><a href={child.url || undefined}>{key}</a></li>
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
					<li tabindex="0">
						<a>
							{item.name}
							<ChevronDown class="h-5 w-5" />
						</a>
						<ul class="bg-base-100 p-2">
							{#each Object.entries(item.children) as [key, child]}
								<li><a href={child.url || undefined}>{key}</a></li>
							{/each}
						</ul>
					</li>
				{:else}
					<li><a href={item.url || undefined}>{item.name}</a></li>
				{/if}
			{/each}
		</ul>
	</div>
</div>
