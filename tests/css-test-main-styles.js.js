// css-test-main-styles.js

// Tesztelési függvény
function testMainStyles() {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      const computedStyle = getComputedStyle(mainElement);
      if (
        computedStyle.getPropertyValue('width') === '1024px' &&
        computedStyle.getPropertyValue('padding') === '5px'
      ) {
        console.log('A main elem megfelelően stílusosítva van.');
      } else {
        console.error('Hiba: A main elem nincs megfelelően stílusosítva.');
      }
    } else {
      console.error('Hiba: A main elem nem található.');
    }
  }
  
  // Automatikus teszt futtatása az oldal betöltődése után
  window.addEventListener("load", testMainStyles);
  