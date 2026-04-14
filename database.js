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

    const check = await db.get(`SELECT COUNT(*) AS total FROM abrigos`);
    if(check.total === 0) {
        await db.exec(`
            INSERT INTO abrigos(nome_abrigo, endereco_abrigo, vagas_abrigo, genero, acessibilidade) VALUES 
                ('Colégio Padre Réus', 'Rua dos Afogados, Bairro Aguapé, 379', 550, 'Mulheres e crianças', 'cadeirantes'),
                ('Igreja Nossa Senhora', 'Rua dos Imigrantes, Bairro Centro, 1200', 290, 'Mulheres, crianças e idosos', 'cadeirantes'),
                ('Casa de coleta', 'Rua dos Afonso Luiz, Bairro Novo Horizonte, 444', 190, 'Homens', 'mobilidade reduzida'),
                ('Casa abrigo', 'Rua de baixo, Bairro novo, 3001', 2044, 'Familias', 'sem acessibilidade'),
                ('Colégio Visconde de Sabugosa', 'Rua das Emilias, Bairro Sitio do picapau amarelo, 37', 750, 'Mulheres e crianças desacompanhadas', 'mobilidade reduzida')
        `);
    } else {
        console.log(`Banco de dados pronto com ${check.total} abrigos cadastrados`);
    }
};