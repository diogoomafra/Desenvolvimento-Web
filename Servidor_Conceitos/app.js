const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
app.use(express.json());

let UsuariosAuth = [];

app.get('/home', (req, res) => {
    res.statuscode = 200;
    res.json({msg: 'login recebido'});
})
app.post('/login', (req, res) =>{
    
    const {usuario, senha} = req.body;

    // Lê o arquivo de usuários
    const dataPath = path.join(__dirname, '/users', 'users.json');
    const fileData = fs.readFileSync(dataPath, 'utf-8');
    const users = JSON.parse(fileData);
    
    // Verifica se existe um usuário com essas credenciais
    const user = users.find(u => u.usuario === usuario && u.senha === senha);
    if (user) {
        if (!UsuariosAuth.includes(usuario)){
            UsuariosAuth.push(usuario);
        }
        
        res.statuscode = 200;
        res.send(`<h3>Login realizado com sucesso! Bem-vindo, ${usuario}.</h3>`);
        

    } else {
        res.statuscode = 401;
        res.send(`<h3>Usuário ou senha inválidos. <a href="/">Tente novamente</a></h3>`);}
        
})
app.get('/time', (req,res)=>{
    const usuario = req.query.usuario;
    if (UsuariosAuth.includes(usuario)){
        const data = new Date();
        res.statuscode = 200;
        // Opção 1: Data formatada em português
        res.json({
            data: data.toLocaleDateString('pt-BR'),
            hora: data.toLocaleTimeString('pt-BR')
            })
    }else{
        res.statuscode = 401;
        res.send('Não autorizado');
    }
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
