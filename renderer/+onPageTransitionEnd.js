// https://vike.dev/onPageTransitionEnd
export { onPageTransitionEnd }

async function onPageTransitionEnd() {
  document.querySelector('body').classList.remove('page-is-transitioning')
}
