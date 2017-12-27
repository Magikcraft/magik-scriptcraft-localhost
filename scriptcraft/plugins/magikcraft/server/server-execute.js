// This file will take in commands from the external node server,
// and trigger the apprioiate server events.
// This depends on the scriptcraft engine running. THIS IS NOT A DIRECT LINK TO THE CONSOLE!

var exec = require('../execute.js');

exports.execute = function(command, args) {
    exec.consoleCommand(command, args);
}

exports.restart = function() {
    exec.consoleCommand('restart',[]);
}

exports.stop = function() {
    exec.consoleCommand('stop', '');
}

exports.kickall = function() {
    exec.consoleCommand('kickall', '');
}

exports.reload = function() {
    refresh();
}