var input = require('input');
var Drone = require('drone');
var blocks = require('blocks');
var d = new Drone();

// Util Vars
var fontColour = {
    red:        '&4',
    lightRed:   '&c',
    orange:     '&6',
    yellow:     '&e',
    green:      '&2',
    lime:       '&a',
    lightBlue:  '&b',
    teal:       '&3',
    darkBlue:   '&1',
    cyan:       '&9',
    pink:       '&d',
    purple:     '&5',
    white:      '&f',
    lightGrey:  '&4',
    darkGrey:   '&8',
    black:      '&0',
    bold:       '&l',
    underline:  '&n',
    italic:     '&o',
    random:     '&k',
    strike:     '&m',
    reset:      '&r'
}

// Constants
var numbOfLevels = 1;
var blockID      = 10;
var arenaWidth   = 20;
var arenaLength  = 20;
var levelSize    = 3;
var msgBegin     =  fontColour.bold + fontColour.orange + "[" +
                    fontColour.reset + fontColour.pink + "Speef" +
                    fontColour.reset + fontColour.bold + fontColour.orange + "]" + 
                    fontColour.reset + " ";

// Text blocks, if multiple lines, displayed as multiple lines
var helpTxt      = ["Commands:",
                    "init: Creates an arena, interactive setup process",
                    "start: Starts a game of spleef, keep calling this for each new game",
                    "help: Displays the help for [Spleef]"];

// Initial Command structure
    // init     -> creates an arena
    // start    -> starts a game
    // delete   -> deletes an arena
    // help     -> lists a help lines

// Args Def
    // Through an interactive set up!
    // 0:   string                  Arena ID
    // 1?:  number  default="1"     Number of Spleef levels
    // 2?:  number  default="10"    Block ID of lowest level
    // 3?:  number  default="20"    Width of arena
    // 4?:  number  default="20"    Length of arena

command( 'spleef', function( args, player ) {

    if (args[0]) {
        // The name of the arena is given
        try {
            eval("cmd_" + args[0] + "(" + args + ", " + player + ")");
        } catch(e) {
            echo(player, msgBegin + "Please give an appropiate command");
        }
    } else {
        // The name of the arena is not given
        try {
            cmd_help(player);
        } catch(e) {
            echo(player, msgBegin + "Error with displaying help! Please refer to script");
        }
    }
});  

// Main spleef commands
function cmd_init(args, player) {
    input_spleefID(args, player, function(id) {
        input_spleefLayers(args, player, function(layers) {
            input_blockID(args, player, function(block) {
                input_spleefWidth(args, player, function(width) {
                    input_spleefLength(args, player, function(length) {
                        createArena(id, layers, block, width, length);
                    })
                });
            });
        })
    });
}

function cmd_start(args, player) {
    // Get arena id
    // Regen arena
    // startArena()
}

function cmd_reset(args, player) {
    // Get arena id
    // Re-gen arena
}

function cmd_help(args, player) {
    for(var line in helpTxt) {
        echo(player, msgBegin + line);
    }
}

// Core Functions
function createArena(id, layers, block, width, length) {
    // Register Arena
    // Make arena
    arenaGen(layers, block, width, length);
}

function startArena() {
    // Tp all players on server to
    // top layer of spleef arena,
    // one block in
    // evenenly distributed

    // Begin checking for players in spleef arena -> getAllPlayersInBox()
    // from beyond top (top + 3) to bottom layer of arena (base - levelSize - 4)
    // If only one player remains, declare them winner
}

function deleteArena() {
    // Clear arena of all blocks
    // Clear arena store
    // Unregister id
}

function arenaGen(layers, block, width, length) {
    d.box(7, width + 2, 1, length + 2); //Base, 7=Bedrock
    d.boxo(7, width + 2, 3 + (layers * levelSize), length + 2); //Walls, 7=Bedrock
    // Make bottom layer
    d.up().forward().right().box(block, width, 1, length);
    // Make each platform
    for(var i = 0; i < layers; i++) {
        d.up(levelSize + 1);
        d.box(80, width, 1, length); //70=Snowblock
    }
}

// Utils

function getAllPlayersInBox(x1,y1,z1,x2,y2,z2) {
    // Get all player names within the bounding box
    // Return as an array
    return [];
}

// Init Support
function input_spleefID(args, player, callback) {
    input( player, msgBegin + 'Input the spleef arena\'s name/ID', function( guess, guesser, repeat ) {
        if (guess != "") {
            guessArray = guess.split(' ');
            return guessArray[0];
        } else {
            repeat();
        }
    });
}

function input_spleefLayers(args, player, callback) {
    input( player, msgBegin + 'Input the number of layers (Defaults to = \'' + numbOfLevels + '\')', function( guess, guesser, repeat ) {
        if (guess != "") {
            if (isNaN(guess)) {
                return guess
            } else {
                echo(guesser, msgBegin + 'Not a number inputed!');
                repeat()
            }
        } else {
            return numbOfLevels;
        }
    });
}

function input_spleefBlock(args, player, callback) {
    input( player, msgBegin + 'Input the bottom block id (Defaults to = \'' + blockID + '\')', function( guess, guesser, repeat ) {
        if (guess != "") {
            if (isNaN(guess)) {
                return guess
            } else {
                echo(guesser, msgBegin + 'Not a number inputed!');
                repeat()
            }
        } else {
            return numbOfLevels;
        }
    });
}

function input_spleefWidth(args, player, callback) {
    input( player, msgBegin + 'Input the width of the arena (Defaults to = \'' + arenaWidth + '\')', function( guess, guesser, repeat ) {
        if (guess != "") {
            if (isNaN(guess)) {
                return guess
            } else {
                echo(guesser, msgBegin + 'Not a number inputed!');
                repeat()
            }
        } else {
            return numbOfLevels;
        }
    });
}

function input_spleefLength(args, player, callback) {
    input( player, msgBegin + 'Input the length of the arena (Defaults to = \'' + arenaLength + '\')', function( guess, guesser, repeat ) {
        if (guess != "") {
            if (isNaN(guess)) {
                return guess
            } else {
                echo(guesser, msgBegin + 'Not a number inputed!');
                repeat()
            }
        } else {
            return numbOfLevels;
        }
    });
}