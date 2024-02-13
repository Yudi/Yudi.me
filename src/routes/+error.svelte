<script>
	import { page } from '$app/stores';
	import { t } from '$lib/i18n/i18n';
</script>

<section class="w-full">
	<div class="justify-top flex flex-1 flex-col items-center pt-12 text-xl">
		{#if $page.status === 404}
			<h1 class="font-semibold">{$t('common.error.notFound')}</h1>
		{:else}
			<h1 class="font-semibold">{$page.status || $t('common.error.else.unknown')}</h1>
			<h2 class="font-normal">
				{$page.error?.message || $t('common.error.else.unknown.description')}
			</h2>
		{/if}
	</div>
</section>
