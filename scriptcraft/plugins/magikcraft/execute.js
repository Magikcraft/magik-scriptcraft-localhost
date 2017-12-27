
// Depending on 'server' -> global namespaced org.bukkit.server
// https://hub.spigotmc.org/javadocs/spigot/

var _server = org.bukkit.Bukkit.server;
var serverUser = 'ConsoleCommandSender';

exports.consoleCommand = function(command, args) {
    console.log('[Execute] Command: "' + flattenCommand(command, args) + '"');
    return _server.dispatchCommand(serverUser, flattenCommand(command, args));
}

// For this to work, you have to resolve the player name into a recognised
// minecraft player log
// exports.playerCommand = function(playerName, command, args) {
//     return server.dispatchCommand(serverUser, flattenCommand(command, args));
// }

function flattenCommand(command, args) {
    // Assemble command
    var flattenedCommand = '';
    if (!args) {
        flattenedCommand = command;
    } else if (args[0] && !args[1]) {
        flattenedCommand = command + ' ' + args[0];
    } else {
        flattenedCommand = command;
        for (var i = 0; i < args.length; i++) {
            flattenedCommand = ' ' + args[i];
        }
    }
    return flattenedCommand;
}