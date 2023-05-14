<script lang="ts">
	import { Github } from 'lucide-svelte';
	let clazz: string;
	export { clazz as class };
</script>

<footer class={`footer footer-center border-t-2 p-4 ${clazz || ''}`}>
	<div class="grid-flow-col items-center gap-4">
		<a href="https://github.com/Yudi">
			<Github class="opacity-50 transition-opacity hover:opacity-100" />
		</a>
	</div>
</footer>
