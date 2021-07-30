import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css'

const app = new App({
	target: document.body,
	props: {
		csslibrary: 'Bootstrap 5',
		preprocessor: 'Node-SASS'
	}
});

export default app;