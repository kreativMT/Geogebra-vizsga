// css-test-intro-styles.js

// Tesztelési függvény
function testIntroStyles() {
    const introElement = document.getElementById('intro');
    if (introElement) {
      const computedStyle = getComputedStyle(introElement);
      if (
        computedStyle.getPropertyValue('font-style') === 'italic'&&
        computedStyle.getPropertyValue('padding-left') === '50px'&&
        computedStyle.getPropertyValue('padding-right') === '50px'
      ) {
        console.log('Az Intro szakasz megfelelően stílusosítva van.');
      } else {
        console.error('Hiba: Az Itnro szakasz nincs megfelelően stílusosítva.');
      }
    } else {
      console.error('Hiba: Az Intro szakasz nem található.');
    }
  }
  
  // Automatikus teszt futtatása az oldal betöltődése után
  window.addEventListener("load", testIntroStyles);
  