const express = require('express');
const {criarBanco} = require('./database');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <body>
            <h1>Abrigo Agora</h1>
            <h2>Listagem de abrigos e suas vagas</h2>
            <p>Endpoint que leva aos abrigos cadastrados localmente: <a href="http://localhost:${PORT}/abrigos">/abrigos</a></p>
            <p>Endpoint que leva aos abrigos cadastrados localmente: <a href="http://localhost:${PORT}/abrigos/4">/abrigos especificos</a></p>
        </body>
    `);
}); 

app.get('/abrigos', async (req, res) => {
    const db = await criarBanco();
    const listaAbrigos = await db.all(`SELECT * FROM abrigos`);
    res.json(listaAbrigos);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});