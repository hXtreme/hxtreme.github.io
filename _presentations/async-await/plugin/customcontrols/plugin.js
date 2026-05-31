/*****************************************************************
** Author: Asvin Goel, goel@telematique.eu
**
** A plugin replacing the default controls by custom controls.
**
** Version: 2.0.0
**
** License: MIT license (see LICENSE.md)
**
******************************************************************/
window.RevealCustomControls = window.RevealCustomControls || {
    id: 'RevealCustomControls',
    init: function(deck) {
        initCustomControls(deck);
    }
};

const initCustomControls = function(Reveal){
	var config = Reveal.getConfig().customcontrols || {};

	var div = document.createElement( 'div' );
	div.id = 'customcontrols';

	document.querySelector(".reveal").appendChild( div );

	document.addEventListener( 'resize', function( event ) {
		// expand controls to make sure they are visible
		var div = document.querySelector("div#customcontrols.collapsed");
		if ( div ) {
			div.classList.remove('collapsed');
		}
	} );

	return this;

};
