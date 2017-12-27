'use strict';
/*global require, exports*/

var http = require('http');

function onJoin(event) {
    setTimeout(function() { //Initial join is a bit chaotic
        console.log(event.player + " has joined the server! Updating server...");
        echo( event.player, 'Updating Server: ' + event.player.name );
        http.request( {
            url: 'http://localhost:25550/script/greet/',
            method: 'POST',
            params: { 'user': event.player.name }
        },
        function(responseCode, responseBody) {
            
        });
    }, 1000);
};
events.playerJoin( onJoin );