const express = require('express');
const {criarBanco} = require('./database');

const app = express();

app.use(express.json());