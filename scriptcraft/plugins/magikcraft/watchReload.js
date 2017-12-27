// Imports
'use strict';
var File = java.io.File;
var watcher = require('watcher');

// Getting the dirs
// './' referenes the scriptCraftServer root dir
var directories = ['./scriptcraft/plugins',
				   './scriptcraft/modules',
                   './scriptcraft/lib'    ,
                   './../magik-scriptcraft'];

// Load all listeners
for(var i = 0; i < directories.length; i++ ) {
	var fullPath = new File(directories[i]);
	console.log('\x1b[32m WatchReloader\x1b[0m Bound to ' + fullPath.canonicalPath);
	watcher.watchDir( directories[i], function( dir ) { 
		console.log('\x1b[32m WatchReloader\x1b[0m Detected Change at: ' + dir + ' | Reloading...');
		refresh();
	});
}
console.log('\x1b[32m WatchReloader\x1b[0m Finished Loading');

// Origonal Refresh line
// __plugin.pluginLoader.disablePlugin(__plugin); __plugin.pluginLoader.enablePlugin(__plugin);

// Link for console colours
// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color