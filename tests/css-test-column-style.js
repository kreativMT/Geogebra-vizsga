// css-test-column-styles.js

function runWidthTest() {
    // Kiválasztjuk az összes .column osztályú elemet
    const columns = document.querySelectorAll('.column');
  
    // Ellenőrizzük, hogy mindegyik elem 300px széles-e
    const isWidth300px = Array.from(columns).every(column => {
      const style = window.getComputedStyle(column);
      const width = style.getPropertyValue('width');
      return width === '300px';
    });
  
    // Ha nem felel meg az elvárásnak, kiírjuk a hibaüzenetet a konzolon
    if (!isWidth300px) {
      console.error('.column osztályú elemek nincsenek 300px szélesek.');
    }

    //ellenőrizzük a margót
    const isMargin20px = Array.from(columns).every(column => {
        const style = window.getComputedStyle(column);
        const margin = style.getPropertyValue('margin');
        return margin === '20px';
      });
    
      // Ha nem felel meg az elvárásnak, kiírjuk a hibaüzenetet a konzolon
      if (!isMargin20px) {
        console.error('.column osztályú elemek margója rossz.');
      }
     

      //ellenőrizzük a float-ot
      const isFloat = Array.from(columns).every(column => {
        const style = window.getComputedStyle(column);
        const float = style.getPropertyValue('float');
        return float === 'left';
      });
    
      // Ha nem felel meg az elvárásnak, kiírjuk a hibaüzenetet a konzolon
      if (!isFloat) {
        console.error('.column osztályú elemek nincs lebegtetve.');
      }

      if (isFloat && isMargin20px && isWidth300px ){
        console.log("A column osztáyl beállításai jók.")
      }
  }
  
  // Az oldal betöltődésekor futtatjuk a tesztet
  window.addEventListener('load', runWidthTest);
  
  
  