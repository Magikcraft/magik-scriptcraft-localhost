# ScriptCraftServer
A server build using the scriptCraft engine -> https://github.com/walterhiggins/ScriptCraft/
Inside of the main minecraft server, there is a node process that scriptcraft can hook into, to update a website on player join

## To Run

### Starting Node
First start the node process, navigate to the `./node` directory then install node dependencies and launch.
```
cd node
npm install
node index.js
```

### Starting MC Server
With the node process running, navigate back to the main directory

If your on a mac then double click the `start.command` otherwise
```
java -Xms1G -Xmx1G -jar paperclip.jar
```

## To Use

1. Open up your webpage, navigate to `http://localhost:3000' this will serve you the webpage that will be updated
2. Launch minecraft and join the server `localhost` (This is your minecraft instance, it runs on port `25565` FYI)
3. Watch the webpage update with your name.

## Files in use

* Node Server -> `./node`
* Scriptcraft Service -> `./scriptcraft/plugins/nodePlayers.js`
* Autoscript reloader -> `./scriptcraft/plugins/watchReload.js`
