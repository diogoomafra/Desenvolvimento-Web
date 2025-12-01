const express = require ('express');
const app = express();
app.use(express.json());

app.get ('/home', (req, res) => res.send('Hello World'));
app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;

    if (usuario === 'diogo' && senha === 'diomafra'){
        return res.status(200).json({msg: 'Login bem sucedido'});
    } else {
        return res.status(401).json({msg: 'Credenciais inválidas'});
    }

});

app.listen(3000, () => console.log('rodando na porta 3000'));

