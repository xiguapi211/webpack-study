'use strict';
//
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
//
var app = express();
var compiler = webpack(webpackConfig);
// middleware
app.use(webpackDevMiddleware(compiler, {
    hot: true,
    inline: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true
    }
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('dist'));

var server = app.listen(8088, function () {
    var port = server.address().port;
    console.log('Server listening on localhost:%s, Ctrl + C to exit', port);
});