const sqlite3 = require('sqlite3');
const {open} = require('sqlite');

const criarBanco = async() => {
    const db = await open({
        filename: '/database.db',
        driver: sqlite3.Database
    });
};