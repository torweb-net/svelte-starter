<script>
	//Import components
	import Navigation from './components/Navigation.svelte'

	//Props from main.js
	//export let csslibrary, preprocessor;
</script>

<main>
	<Navigation links={[
		{to: "https://www.google.com", text: "Google"}, 
		{to: "https://www.duckduckgo.com", text: "DuckDuckGo"},
		{to: "https://www.yahoo.com", text: "Yahoo"},
	]} />
</main>

<style lang="scss">
	@import './scss/variables.scss';

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>