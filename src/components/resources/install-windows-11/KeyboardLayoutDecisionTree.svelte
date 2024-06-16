<script lang="ts">
	let cKey: boolean | null = null;
	let altGrKey: boolean | null = null;
</script>

<div class="card w-96 bg-base-100 shadow-xl card-body mb-10">
	{#if cKey === null && altGrKey === null}
		<h3>
			Seu teclado possui a tecla <kbd class="kbd kbd-xs">Ç</kbd>?
		</h3>

		<div class="card-actions justify-start">
			<button class="btn" on:click={() => (cKey = true)}>Sim</button>
			<button class="btn" on:click={() => (cKey = false)}>Não</button>
		</div>
	{/if}

	{#if cKey === false}
		<blockquote>Meu teclado não possui a tecla Ç.</blockquote>

		<p class="mb-0">Provavelmente o layout do seu teclado é americano (US).</p>

		<p>Use o layout "US International" para poder acentuar letras.</p>

		<div class="card-actions justify-start">
			<button class="btn" on:click={() => (cKey = null)}> Voltar </button>
		</div>
	{/if}

	{#if cKey === true}
		{#if altGrKey === null}
			<blockquote>Meu teclado possui a tecla Ç e...</blockquote>
			<h3 class="mt-0">
				Seu teclado possui a tecla <kbd class="kbd kbd-xs">Alt Gr</kbd>?
			</h3>
			<div class="card-actions justify-start">
				<button class="btn" on:click={() => (altGrKey = true)}>Sim</button>
				<button class="btn" on:click={() => (altGrKey = false)}>Não</button>
				<br />
				<button class="btn" on:click={() => (cKey = null)}> Voltar </button>
			</div>
		{:else}
			<blockquote>
				Meu teclado possui a tecla Ç e {altGrKey ? '' : ' não'} possui a tecla Alt Gr.
			</blockquote>

			<p>
				Provavelmente o layout do seu teclado é Português (Brasil {altGrKey ? 'ABNT2' : 'ABNT'}).
			</p>

			<div class="card-actions justify-start">
				<button class="btn" on:click={() => (altGrKey = null)}>Voltar</button>
			</div>
		{/if}
	{/if}
</div>
