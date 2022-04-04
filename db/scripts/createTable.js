"use strict";
exports.__esModule = true;
var __1 = require("..");
var createTable = function () {
    return (0, __1["default"])("CREATE TABLE IF NOT EXISTS pokemon_data (id serial PRIMARY KEY, name TEXT, description TEXT, sprite TEXT);");
};
createTable();
