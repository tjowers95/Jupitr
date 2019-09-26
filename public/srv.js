"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mysql = require('mysql');
const qs = require('query-string');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tcj06478218',
    database: 'jupitr'
});
db.connect();
app.get('/', function (rq, rs) {
    rs.render('index.ejs');
});
app.get('/sync', function (rq, rs) {
    var q = qs.parseUrl(rq.url).query;
    db.query(`insert into usr (name, cell, email)
				values ("${q.first} ${q.last}", "${q.cell}", "${q.email}")`, function (e, r, f) {
        console.log(e);
        console.log(r);
        console.log(f);
        rs.send(r);
    });
});
const server = http.listen(8080, function () {
    console.log('listening on *:8080');
});
//# sourceMappingURL=srv.js.map