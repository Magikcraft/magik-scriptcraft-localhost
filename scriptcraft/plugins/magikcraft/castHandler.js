'use strict';
var commando = require('../commando/commando').commando;

var players = require('../../../../magik-scriptcraft/players');
console.log(JSON.stringify(players));

// Register cast command.
commando('cast', function(args, player) {

    if(!args[0]) {
        echo(player, 'Welcome to the Magikcraft plugin, please use a file name');
    } else {
        var fileName = args[0] + "";

        if (players[player.name] && players[player.name]['spells'] && players[player.name]['spells'][fileName]) {
            var msg = 'invoking ' + player.name + '.spells.' + fileName;
            console.log(msg);
            // echo(player, msg);

            // invoke the spell
            players[player.name]['spells'][fileName](player);
        }
        else {
            var msg = 'cant find ' + player.name + '.spells.' + fileName;
            console.log(msg);
            echo(player, msg);
        }
    }
});

console.log('cast command enabled');

// test: `/cast test`
// ^ will work for triyuga, hipppie125, sitapati