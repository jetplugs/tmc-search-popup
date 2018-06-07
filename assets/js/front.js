jQuery( document ).ready( function( $ ) {

    var popup = {

        'elems':            {
            "rootEl":      $( '#tmc_sp_root' ),        //  Popup main object.
            "closeEls":    $( '#tmc_sp_close' ),       //  Close buttons.
            "openEls":     $( '#adminbar-search' ),    //  Open buttons.
            "formEl":      $( '#tmc_sp_form' ),        //  Form.
            "resultsEl":   $( '#tmc_sp_results' )      //  Results div.
        },

        /**
         * Initializes whole mechanism.
         *
         * @return void
         */
        init:               function() {

            if( ! popup.elems.rootEl ){
                console.log( 'Search Popup TMC could not initialize elements.' );
                return;
            }

            popup.elems.openEls.click( function(event ) {
                event.preventDefault();
                popup.activatePopup();
            } );

            popup.elems.closeEls.click( function(event ) {
                event.preventDefault();
                popup.deactivatePopup();
            } );

            popup.elems.formEl.submit( function(event ) {
                event.preventDefault();
                popup.sendForm();
            } );

        },

        /**
         *
         *
         * @return void
         */
        activatePopup:      function() {

            popup.elems.rootEl.addClass( 'is-active' );
            $( 'body' ).addClass( 'noscroll' );

        },

        deactivatePopup:    function() {

            popup.elems.rootEl.removeClass( 'is-active' );
            $( 'body' ).removeClass( 'noscroll' );

        },

        sendForm:           function() {

            popup.elems.rootEl.addClass( 'has-results' );
            popup.elems.resultsEl.html( '' );

        }

    };

    popup.init();

} );