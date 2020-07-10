var app = require('express').Router();
var staffroutes = require('../masters/staff/staff-routes');
var productroutes = require('../masters/product/product-routes');
var producttyperoutes = require('../masters/producttype/producttype-routes');
var ordersroutes = require('../orders/orders-routes');
var customersroutes = require('../customers/customer-routes');
var registerroutes = require('../register/register-routes');
var loginroutes = require('../login/login-routes');
var userroutes = require('../usercart/usercart-routes');
var usersignroutes = require('../usersign/usersign-routes');

app.use('/staff',staffroutes);
app.use('/product',productroutes);
app.use('/producttype',producttyperoutes);
app.use('/orders',ordersroutes);
app.use('/customers',customersroutes);
app.use('/register',registerroutes);
app.use('/login',loginroutes);
app.use('/usercart',userroutes);

app.use('/usersign',usersignroutes);
module.exports = app;