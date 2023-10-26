// css-test-img-styles.js

// Tesztelési függvény
function testImgStyles() {
    const imgElement = document.querySelector('img');
    if (imgElement) {
      const computedStyle = getComputedStyle(imgElement);
      if (
        computedStyle.getPropertyValue('width') === '280px'&&
        computedStyle.getPropertyValue('margin-top') === '0px'&&
        computedStyle.getPropertyValue('border') === '2px solid rgb(255, 255, 0)'
        
        
      ) {
        console.log('Az img megfelelően stílusosítva van.');
      } else {
        console.error('Hiba: Az img nincs megfelelően stílusosítva.');
      }
    } else {
      console.error('Hiba: Az img nem található.');
    }
  }
  
  // Automatikus teszt futtatása az oldal betöltődése után
  window.addEventListener("load", testImgStyles);
  