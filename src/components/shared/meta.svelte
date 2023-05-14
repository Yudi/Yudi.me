<script lang="ts">
	export let title: string = '';

	const name = 'Yudi';
	const finalTitle = title ? `${name} - ${title}` : name;
</script>

<svelte:head>
	<title>{finalTitle}</title>
</svelte:head>
