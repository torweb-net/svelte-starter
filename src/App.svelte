<script>
	//Props from main.js
	export let csslibrary, preprocessor;
</script>

<main>
	<h1>Svelte starter with {csslibrary} and {preprocessor}</h1>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>