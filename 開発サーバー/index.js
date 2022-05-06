var express = require('express');
var proxy = require('express-http-proxy');
var webpack = require('webpack');
// Create server
var app = express();
app.disable('x-powered-by');

// Server setup
app.use(log());

// Bind routes
routes.forEach(route => {
    app.get(route.pattern, handler(route));
});

var middlewareOptions = {};

app.use(webpackDevMiddleware(compiler, middlewareOptions));

var proxyHost = process.env.FALLBACK || '';
if (proxyHost !== '') {
    // Fall back to scratchr2 in development
    // This proxy middleware must come last
    app.use('/', proxy(proxyHost));
