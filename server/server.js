
const express = require('express');
const models = require('./models');
const {graphqlHTTP} = require('express-graphql');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
