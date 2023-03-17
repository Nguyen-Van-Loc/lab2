var express = require('express');
const bodiparser = require('body-parser');
var number = require('./lab2');
const req = require('express/lib/request');
const { query } = require('express');
const expressHbs = require('express-handlebars')
var app = express();
app.engine('.hbs', expressHbs.engine({ extname: "hbs", defaultLayout: 'app'}));
app.set('view engine', '.hbs');
app.set('views', './views');

const hbs = expressHbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
      foo() { return 'FOO!'; },
      bar() { return 'BAR!'; }
    }
  });
app.get('', (req, res) => {
    res.render('tong')
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
            result = number.chia(n1, n2)
            break;
        default:
            res.render();
            break;
    }
    res.render(
        `tong`,
     {result,n1,n2,t:pheptinh===`tong`,h:pheptinh===`hieu`,t1:pheptinh===`tich`,t2:pheptinh===`chia`,}
    );
})
app.listen(3000, (res) = {

})
