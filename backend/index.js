const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('dotenv').config();

const { generateSwaggerDocs } = require('./swagger');
const app = express();
const config = require('./config');

const port = process.env.PORT || config.port;

const auth = require('./routes/auth');
const user = require('./routes/user');
const product = require('./routes/product');
const product_category = require('./routes/product_category');
const order = require('./routes/order');

generateSwaggerDocs(app);

// db
const db = require('./database/db')();

// config
app.set('apiUrl', config.apiUrl);
app.set('docsEndpoint', config.docsEndpoint);

app.get('/', (req, res) => {
    res.redirect(config.docsEndpoint);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(config.apiPath + '/auth', auth);
app.use(config.apiPath + '/users', user);
app.use(config.apiPath + '/products', product);
app.use(config.apiPath + '/product-categories', product_category);
app.use(config.apiPath + '/orders', order);

app.listen(port, () => {
    console.log(`Host: http://localhost:${port}`);
    console.log(`Api Url: ${ config.apiUrl }`);
});