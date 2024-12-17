console.log ("Hello World");

let moneybalance = null; 
const express = require ("express");
const app= express();
const path= require('path');

app.use(express.json())

const PORT=3000 
app.listen(PORT,()=> {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
});

app.get ('/', (req, res)=> {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get ('/sobre', (req,res)=> {
    res.sendFile(path.join(__dirname,'sobre.html'));
});

app.get ('/contactos', (req,res)=> {
    res.sendFile(path.join(__dirname,'contactos.html'));
});

app.get ('/tarefas', (req,res)=> {
    res.status(404).send("nao encontrado");
});

app.get ('/pagamentos', (req,res)=> {
    res.sendStatus(403);
});

app.get ('/carros/:marcas',(req,res)=> {
    const reqid = req.params.marcas;
    res.send('esta e a pagina das ${reqid}');
});

app.get ('/user/:name/nationality/:country', (req,res)=> {
    const reqn = req.params.name;
    const reqc = req.params.country;
    res.send('O ${reqn} tem nacionalidade ${reqc}');
});

app.get ('/livros', (req,res)=> {
    const reqn = req.query.name;
    const reqid = req.query.id;
    re.send('O utilizador ${reqid} com nome ${reqn} nao foi encontrado');
});

app.get ('/balance', (req,res)=> {

    res.send(`${moneybalance}`);
});

app.put ('/balance', (req,res)=> {

    if(moneybalance!=null){
        moneybalance=req.body.money;
        res.send(200);
    } else {
        res.send(400);
    }
});

app.post ('/balance', (req,res)=> {

    if(moneybalance==null){
        moneybalance=req.body.money;
        res.send(200);
    } else {
        res.send(400);
    }
    
});

app.delete ('/balance', (req,res)=> {

    moneybalance=null
    res.sendStatus(200);
    
});

const users = [ 
    {
        id: 0,
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
    },
    {
        id: 1,
        first_name: 'Alice',
        last_name: 'Smith',
        email: 'alicesmith@example.com',
    },
];

app.get ('/users', (req,res)=> {
    res.send(users);
});

app.post ('/users', (req,res)=> {

});