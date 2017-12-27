var http = require('http');

var disable = true;

function onJoin(event) {
    if (!disable) {
        console.log(event.player + " has joined the server! Updating server...");
        echo( event.player, 'Updating Server' + event.player );
        http.request( {
            url: 'http://localhost:3000/user',
            method: 'POST',
            params: { 'username': event.player.name }
        },
        function(responseCode, responseBody) {
            var jsObj = JSON.parse( responseBody );
            console.log('Result is ' + jsObj.stringify);
        });
    }
};
events.playerJoin( onJoin );