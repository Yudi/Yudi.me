<script>
	import { MapPinIcon } from 'lucide-svelte';
	import { t } from '$lib/i18n/i18n';
</script>

<section class="w-full">
	<div class="justify-top flex flex-1 flex-col items-center pt-12">
		<h1 class="text-6xl">Renan Yudi</h1>

		<div class="text-base font-light">
			<MapPinIcon class="inline-block w-4 align-bottom" />
			{$t('home.header.location')}
		</div>
	</div>
</section>
