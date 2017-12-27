// The magik object like in the original magikcraft!
var magik = require('../../../../magik-scriptcraft/plugins/magik');
var players = require('../../../../magik-scriptcraft/plugins/players');
// ^ examples of requiring from another repo, outside of the main minecraft dir!


// Pulling a function off an obj:
var test = magik.test;
test();

// Export magik globally (coz we're in plugins)
exports.magik = magik;

// test: `/js magik.yomama(self)`