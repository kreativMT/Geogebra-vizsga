// css-test-header-styles.js

// Tesztelési függvény
function testHeaderStyles() {
    const headerElement = document.querySelector('header');
    if (headerElement) {
      const computedStyle = getComputedStyle(headerElement);
      if (
        computedStyle.getPropertyValue('border') === '2px dotted rgb(0, 128, 0)'
      ) {
        console.log('A header szakasz megfelelően stílusosítva van.');
      } else {
        console.error('Hiba: A header szakasz nincs megfelelően stílusosítva.');
      }
    } else {
      console.error('Hiba: A header szakasz nem található.');
    }
  }
  
  // Automatikus teszt futtatása az oldal betöltődése után
  window.addEventListener("load", testHeaderStyles);
  