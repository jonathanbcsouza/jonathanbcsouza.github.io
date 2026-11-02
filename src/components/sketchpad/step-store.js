/**
 * The playhead position, kept outside React state on purpose.
 *
 * Now that the audio engine lives above the router so sound survives
 * navigation, anything it puts into provider state re-renders every page
 * under it. The playhead advances a few times a second, which would mean
 * re-rendering the whole tree, all fourteen project cards included, while a
 * loop plays on another page.
 *
 * As an external store, only the component that subscribes re-renders.
 */
let current = -1;
const listeners = new Set();

export function setStep(step) {
  if (step === current) return;
  current = step;
  for (const listener of listeners) listener();
}

export function getStep() {
  return current;
}

/** Nothing is playing during prerender. */
export function getServerStep() {
  return -1;
}

export function subscribeStep(onChange) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}
