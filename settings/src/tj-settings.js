
import singleSpaSvelte from "single-spa-svelte";
import App from "./App.svelte";

const svelteLifecycles = singleSpaSvelte({
  component: App,
  domElementGetter: () => document.getElementById('settings'),
  props: { enabled : true }
});

export const { bootstrap, mount, unmount } = svelteLifecycles;
