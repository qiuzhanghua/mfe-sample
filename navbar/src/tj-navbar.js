import singleSpaSvelte from "single-spa-svelte";
import App from "./App.svelte";

const svelteLifecycles = singleSpaSvelte({
  component: App,
  domElementGetter: () => document.getElementById('navbar'),
  props: { more : 'some data' }
});

export const { bootstrap, mount, unmount } = svelteLifecycles;
