// css-test-h1-styles.js

// Tesztelési függvény
function testH1Styles() {
    const h1Element = document.querySelector('h1');
    if (h1Element) {
      const computedStyle = getComputedStyle(h1Element);
      if (
        computedStyle.getPropertyValue('color') === 'rgb(255, 165, 0)' &&
        computedStyle.getPropertyValue('text-align') === 'center' &&
        computedStyle.getPropertyValue('font-weight') === '700'
      ) {
        console.log('Az h1 cím megfelelően stílusosítva van.');
      } else {
        console.error('Hiba: Az h1 cím nincs megfelelően stílusosítva.');
      }
    } else {
      console.error('Hiba: Az h1 elem nem található.');
    }
  }
  
  // Automatikus teszt futtatása az oldal betöltődése után
  window.addEventListener("load", testH1Styles);