var express = require('express');
const bodiparser = require('body-parser');
var number = require('./lab2');
const req = require('express/lib/request');
const { query } = require('express');
var app = express();
app.get('', (req, res) => {
    res.sendFile(__dirname + '/app.html')
})
app.use(bodiparser.urlencoded({ extended: true }))
app.post('/', (req, res) => {
    const n1 = Number(req.body.number1);
    const n2 = Number(req.body.number2);
    
    const pheptinh = req.body.operator;
    let result =0;
    switch (pheptinh) {
        case 'tong':
            result = number.cong(n1, n2)
            break;
        case 'hieu':
            result = number.tru(n1, n2)
            break;
        case 'nhan':
            result = number.nhan(n1, n2)
            break;
        case 'chia':
            if (n2==0) {
                res.writeHead(404, { "Content-Type": "text/html" });
                return res.end("So thu 2 Phai khac 0");
            }
            result = number.chia(n1, n2)
            break;
        default:
            break;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      `<p style="text-align: center; font-size: 25px;">Result: ${result}</p>`
    );
})
app.listen(3000, (res) = {

})
