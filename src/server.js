"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var express = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    };
    Server.prototype.routes = function () {
        var router = express.Router();
        this.app.use('/', function (req, res) {
            res.sendFile('./index.html');
        });
    };
    Server.prototype.start = function (port) {
        this.app.listen(port);
    };
    return Server;
}());
exports["default"] = Server;
