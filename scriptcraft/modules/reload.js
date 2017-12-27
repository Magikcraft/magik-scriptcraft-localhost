var watcher = require('watcher');
watcher.watchDir( '../../', function( dir ) {
  __plugin.pluginLoader.disablePlugin(__plugin); __plugin.pluginLoader.enablePlugin(__plugin);
});