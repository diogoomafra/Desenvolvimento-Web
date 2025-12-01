const express = require ('express');
const app = express();
app.use = (express.json());

app.get ('/home', (req, res) => res.send('Hello World'));
app.post('/login', (req, res) => {
    (res.json({message: 'login recebido', dados: req.body}))

const { usuario, senha } = req.body;

    if (usuario === 'diogo' && senha === 'diomafra'){
        return res.status(200).json({msg: 'Login bem sucedido'});
    }else if (usuario === 'juliana' && senha === 'juliana123'){
        return res.status(200).json({msg: 'Login não sucedido'});
    }

});

app.listen(3000, () => console.log('rodando na porta 3000'));

