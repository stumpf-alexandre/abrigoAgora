const sqlite3 = require('sqlite3');
const {open} = require('sqlite');

const criarBanco = async() => {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS abrigos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome_abrigo TEXT,
            endereco_abrigo TEXT,
            vagas_abrigo INTEGER,
            qtd_desabrigado INTEGER DEFAULT 0,
            genero TEXT,
            acessibilidade TEXT,
            pet INTEGER DEFAULT 0
        )
    `,);
    console.log('Banco de dados inicializado');

    const checagem = await db.get(`SELECT COUNT(*) AS total FROM abrigos`);
    if(checagem.total === 0) {
        await db.exec(`
            INSERT INTO abrigos(nome_abrigo, endereco_abrigo, vagas_abrigo, genero, acessibilidade) VALUES
                    ('Colégio Padre Réus', 'Rua dos Afogados, Bairro Aguapé, 379', 550, 'Mulheres e crianças', 'cadeirantes'),
                    ('Igreja Nossa Senhora', 'Rua dos Imigrantes, Bairro Centro, 1200', 290, 'Mulheres, crianças e idosos', 'cadeirantes'),
                    ('Casa de coleta', 'Rua dos Afonso Luiz, Bairro Novo Horizonte, 444', 190, 'Homens', 'mobilidade reduzida'),
                    ('Casa abrigo', 'Rua de baixo, Bairro novo, 3001', 2044, 'Familias', 'sem acessibilidade'),
                    ('Colégio Visconde de Sabugosa', 'Rua das Emilias, Bairro Sitio do picapau amarelo, 37', 750, 'Mulheres e crianças desacompanhadas', 'mobilidade reduzida')
        `);
    } else {
        console.log(`Banco de dados pronto com ${checagem.total} abrigos cadastrados`);
    }
    console.log('Banco de dados pronto');

    const todosAbrigos = await db.all(`
        SELECT * FROM abrigos
    `);
    console.table(todosAbrigos);

    const abrigoEspecifico = await db.all(`
        SELECT * FROM abrigos
        WHERE nome_abrigo = 'Colégio Padre Réus'    
    `);
    console.table(abrigoEspecifico);

    await db.run(`
        UPDATE abrigos
        SET pet = 1
        WHERE id = 2
    `);
    console.log('Dados atualizados')

    await db.run(`
        UPDATE abrigos
        SET qtd_desabrigado = 34
        WHERE id = 1
    `);
    console.log('Dados atualizados')

    await db.run(`
        DELETE FROM abrigos
        WHERE id = 5   
    `);
    console.log('Abrigo do id 5 removido');

    const abrigosAtualizados = await db.all(`
        SELECT * FROM abrigos    
    `);
    console.table(abrigosAtualizados);

    return db;
};

module.exports = {criarBanco};