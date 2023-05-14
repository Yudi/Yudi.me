<script>
	import { page } from '$app/stores';
</script>

<section class="w-full">
	<div class="justify-top flex flex-1 flex-col items-center pt-12 text-xl">
		{#if $page.status === 404}
			<h1 class="font-semibold">Not found</h1>
			<h2 class="font-normal">The requested page does not exist</h2>
		{:else}
			<h1 class="font-semibold">{$page.status || 'Unknown status code'}</h1>
			<h2 class="font-normal">{$page.error?.message || 'Error'}</h2>
		{/if}
	</div>
</section>
