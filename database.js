const sqlite3 = require('sqlite3');
const {open} = require('sqlite');

const criarBanco = async() => {
    const db = await open({
        filename: '/database.db',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS abrigos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome_abrigo TEXT,
            endereco_abrigo TEXT,
            vagas_abrigo INTEGER,
            qtd_desabrigados INTEGER DEFAULT 0,
            genero TEXT,
            acessibilidade TEXT,
            pet INTEGER DEFAULT false
        )
    `);
    console.log(`Banco de dados configurado.`);
};