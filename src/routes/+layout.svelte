<script>
	import Footer from '../components/shared/footer.svelte';
	import Navbar from '../components/shared/navbar.svelte';
	import Meta from '../components/shared/meta.svelte';
	import { dev } from '$app/environment';
</script>

<svelte:head>
	{#if !dev}
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-ELMF6V23GD"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', 'G-ELMF6V23GD');
		</script>
	{/if}
</svelte:head>

<div class="mx-auto min-h-screen max-w-5xl">
	<Meta />
	<Navbar />
	<slot />
	<Footer class="sticky top-[100vh]" />
</div>
