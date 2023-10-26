// css-test-h2-styles.js

// Tesztelési függvény
function testH2Styles() {
    const h2Element = document.querySelector('h2');
    if (h2Element) {
      const computedStyle = getComputedStyle(h2Element);
      if (
        computedStyle.getPropertyValue('color') === 'rgb(153, 153, 153)' &&
        computedStyle.getPropertyValue('margin-top') === '0px'
      ) {
        console.log('Az h2 cím megfelelően stílusosítva van.');
      } else {
        console.error('Hiba: Az h2 cím nincs megfelelően stílusosítva.');
      }
    } else {
      console.error('Hiba: Az h2 elem nem található.');
    }
  }
  
  // Automatikus teszt futtatása az oldal betöltődése után
  window.addEventListener("load", testH2Styles);