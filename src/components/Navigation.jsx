// navigation.js

export function scrollToTopOnNavigation() {
  // Add an event listener to detect navigation events
  window.addEventListener("popstate", () => {
    // Scroll the page to the top
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
