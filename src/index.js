"use strict";
exports.__esModule = true;
var server_1 = require("./server");
var PORT = 4000;
var server = new server_1["default"]();
server.start(PORT);
console.log("Server listening on port " + PORT);
