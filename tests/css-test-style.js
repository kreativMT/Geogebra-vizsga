// css-test-style.js

// Tesztelési függvény
function testStylesInCSSFile() {
  const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
  let found = false;

  linkElements.forEach((link) => {
    if (link.href.endsWith('style.css')) {
      found = true;
    }
  });

  if (found) {
    console.log('A "style.css" CSS fájl sikeresen be van linkelve az oldalhoz.');
  } else {
    console.error('Hiba: A "style.css" CSS fájl nincs megfelelően beállítva vagy nincs linkelve.');
  }
}

// Automatikus teszt futtatása az oldal betöltődése után
window.addEventListener("load", testStylesInCSSFile);