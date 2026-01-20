
// #region normal Scrolling
// const el = document.getElementById('scroll-container');

// el.addEventListener('wheel', (e) => { // Reagiert auf das Mausrad / Trackpad-Scrollen
//     e.preventDefault(); //verhindert das Standardverhalten des Browsers / sonst würde der Browser vertikal scrollen /nötig, damit wir das Scrollen selbst steuern
//     el.scrollLeft += e.deltaY; // "scrollLeft" horizontale Scroll-Position des Elements (0 = ganz links) / e.deltaY: vertikale Scroll-Menge des Mausrads Mausrad ↓ → positiver Wert UND Mausrad ↑ → negativer Wert
//     //langsamer scrollen:
//     //el.scrollLeft += e.deltaY * 0.5;
//     // invertiert scrollen:
//     //el.scrollLeft -= e.deltaY;


// }, { passive: false }); // sagt dem Browser:„Ich werde preventDefault() benutzen“ (passive Events dürfen nicht blockiert werden)
// #endregion


//#region Page-by-Page Scrollen
const el = document.getElementById('scroll-container');
let isScrolling = false;

el.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (isScrolling) return; // verhindert Mehrfachsprünge
    isScrolling = true;
    const direction = Math.sign(e.deltaY); // Gibt von Argument bei positivem Wert => 1 ODER bei negativem Wert => -1 ODER bei 0 => 0 zurück
    const pageWidth = window.innerWidth;

    el.scrollBy({ // scrollt smooth genau eine Seitenbreite
        left: direction * pageWidth,
        behavior: 'smooth'
    });

    // Sperre nach Animation wieder aufheben
    setTimeout(() => {
        isScrolling = false;
    }, 700); // nach 700 ms kann man wieder scrollen (bei zu wenig Zeit wird man beim Scrollen zwischen Seiten hängen bleiben)

}, { passive: false });
// #endregion
