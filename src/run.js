"use strict";

document.addEventListener( "gsuiEvents", ( { detail: d } ) => {
	console.warn( `uncatched gsuiEvent: [${ d.component }][${ d.eventName }]`, d.args );
} );

new Promise( resolve => {
	const el = document.querySelector( "#splashScreen" );
	const elTitle = document.querySelector( "#splashScreen-title" );
	const elStart = document.querySelector( "#splashScreen-start" );
	const elForm = document.querySelector( "#splashScreen-form" );
	const elCookies = document.querySelector( "[name='cookies']" );
	const glitch = new TextGlitch( elTitle );

	el.classList.add( "loaded" );
	if ( window.CSS && CSS.supports( "clip-path: inset(0 1px 2px 3px)" ) ) {
		glitch.on();
	}
	elCookies.checked = localStorage.getItem( "cookieAccepted" ) === "1";
	elForm.onchange = () => {
		elStart.disabled = !elCookies.checked;
	};
	elStart.onclick = () => {
		glitch.off();
		el.classList.add( "starting" );
		localStorage.setItem( "cookieAccepted", "1" );
		setTimeout( resolve, 100 );
	};
	elForm.onchange();
} )
	.then( () => GSUloadJSFile( "assets/gswaPeriodicWavesList-v1.js" ) )
	.then( () => GSUloadJSFile( "assets/gsuiLibrarySamples-v1.js" ) )
	.then( () => {
		const daw = new GSDAW();

		GSUsetAttribute( daw.rootElement, "version", document.querySelector( "#splashScreen-version" ).textContent );
		// daw.getDAWCore().$newComposition(); // better commented but it would be great to know why something doesnt work with it.
	} )
	.then( () => {
		const el = document.querySelector( "#splashScreen" );

		el.classList.add( "started" );
		setTimeout( () => el.remove(), 800 );
	} );
