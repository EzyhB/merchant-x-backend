"use strict";
exports.__esModule = true;
var pg_1 = require("pg");
var connectionString = process.env.PG_CONNECTIONSTRING;
var pool = new pg_1.Pool({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false }
});
var query = function (text, params) {
    return pool.query(text, params);
};
exports["default"] = query;
