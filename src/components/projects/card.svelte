<script lang="ts">
	export let image = '';
	export let size = 2;
	export let title = '';
	export let href = '';
</script>

<a
	{href}
	class="duration-250 card-component grid rounded-2xl transition-all hover:scale-105"
	style="--size: {size}"
>
	<img src={image} alt="" class="col-start-1 row-start-1 h-full w-full rounded-2xl object-cover" />

	<div
		class="gradient col-start-1 row-start-1 flex items-end justify-center rounded-2xl p-4 text-white"
	>
		<h1 class="text-2xl font-bold">{title}</h1>
	</div>
</a>

<style>
	.card-component {
		grid-column: span var(--size);
	}
	.gradient {
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%);
	}
</style>
