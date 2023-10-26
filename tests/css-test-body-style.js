// css-test-body-styles.js

// Tesztelési függvény
function testBodyStyles() {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      const computedStyle = getComputedStyle(bodyElement);
      if (
        computedStyle.getPropertyValue('background-color') === 'rgb(255, 255, 224)'&&
        computedStyle.getPropertyValue('font-family') === 'Arial'
      ) {
        console.log('A body megfelelően stílusosítva van.');
      } else {
        console.error('Hiba: A body nincs megfelelően stílusosítva.');
      }
    } else {
      console.error('Hiba: A body szakasz nem található.');
    }
  }
  
  // Automatikus teszt futtatása az oldal betöltődése után
  window.addEventListener("load", testBodyStyles);
  