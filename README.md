# Magikcraft | Minecraft | ScriptCraft Localhost!

An easy-to-use Scriptcraft Localhost, for developing JS scripts that will run inside Minecraft (included!).

A 1.12 Minecraft Server build including the ScriptCraft engine -> https://github.com/walterhiggins/ScriptCraft/

This is vanillia 1.12 Minecraft and Scriptcraft.

The only custom code is in `/scriptcraft/plugins/magikcraft`.

## To Run

### Starting Mincraft Server

If your on a Mac then double click the `start.command` otherwise
```
java -Xms1G -Xmx1G -jar paperclip.jar
```

### Connecting to Minecraft Server Localhost, via your Minecraft Client

Start your Minecraft Client.
Add a new server entry:

* SERVER NAME: Local Minecraft
* SERVER ADDRESS: localhost

Run it!

## To Use

* Start the Minecraft server localhost, and connect your Minecraft Client to it (see above).
* Open this project in your favorite IDE.
* Start by doing your custom JS development in `/scriptcraft/plugins/magikcraft`
* We have added a file watcher, which automatically reloads the ScriptCraft engine, whenever you add or update any file in `/scriptcraft/`. See `./scriptcraft/plugins/magikcraft/watchReload.js`
* This is straight up ScriptCraft, so all the documentation here is valid: https://github.com/walterhiggins/ScriptCraft/
* Happy hacking!

## Contributing

Feel free to fork this repo. If you make something cool, we'd love to check it out. Here is the process:

* Fork the develop branch https://github.com/Magikcraft/magik-scriptcraft-localhost/tree/develop
* Make your changes/additions
* Make a Pull Request.

Also, you can always email me to chat more: tim@magikcraft.io

## Git helper scripts

We added a couple of git helper scripts, to help localhost dev:

* `./git-clean.sh` - this will discard all changes and added files outside the `./scriptcraft` dir. This is helpful because Minecraft, when running, adds and changes a bunch of random files, which we don't want to commit. For best results, when you want to commit your magik scriptcraft JS scripts, stop Minecraft, run `./git-clean.sh`, then when you run `git status` you will only see your changes in the `./scriptcraft` dir.