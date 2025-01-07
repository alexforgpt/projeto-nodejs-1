console.log ("Hello World");

let moneybalance = null; 
const express = require ("express");
const app= express();
const path= require('path');
const mysql = require('mysql2');

const connection = mysql.createConnection({
   host: '127.0.0.1',
   user: 'root',
   password: '',
   database: 'psit1',
   port: 3360 
});

connection.connect((err)=> {
    if (err) {
        console.log('Erro ao conectar à base de dados:', err.message);
    } else {
        console.log('Conectado à base de dados MySQL!');
    }
});



const myQuery = `SELECT * FROM ${}`

connection.query(myQuery, (err, results) => {
    if (err) {
        return res.status(500).send('Erro ao buscar users: ' + err.message);
    }

    res.json(results);
});

app.get ('/users', (req,res) => {
    const myQuery = `SELECT * FROM ${}`

    connection.query(myQuery, (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao buscar users: ' + err.message);
        }
    
        res.json(results);
    });
});

app.post ('/users', (req,res) => {
    const myQuery = `SELECT * FROM ${} (first_name, last_name, email) values (req.body.first_name, req.body.last_name, req.body.email)`

    connection.query(myQuery, (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao buscar users: ' + err.message);
        }
    
        res.json(results);
    });
});

app.put ('/users/:id', (req,res) => {
    const reqid= req.params.id;

    const myQuery = `SELECT * FROM ${} (first_name, last_name, email) values (req.body.first_name, req.body.last_name, req.body.email)`

    connection.query(myQuery, (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao buscar users: ' + err.message);
        }
    
        res.json(results);
    });
});

app.delete ('/users/:id', (req,res) => {

});

app.use(express.json())

const PORT=3000 
app.listen(PORT,()=> {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
});

app.get ('/', (req,res)=> {
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

const users=[
 
    {
 
        id: 0,
        first_name:"John",
        last_name:"Doe",
        email:"johndoe@example.com"
    },
 
    {
        id:1,
        first_name:"Alice",
        last_name:"Smith",
        email:"alicesmith@example.com"
 
    }
]
 
app.get('/users', (req,res)=>{
   
    res.send(users);
});
 
app.put('/users', (req,res)=>{
 
    for (let i = 0 ; i<users.length;i++){
 
        if(users[i].id==req.body.id){
            if(req.body.first_name!=null){
                users[i].first_name=req.body.first_name;
            }
 
 
            if(req.body.last_name!=null){
                users[i].last_name=req.body.last_name;
            }
 
            if(req.body.email!=null){
                users[i].email=req.body.email;
            }
 
           
 
            res.sendStatus(200);
 
            return;
        }
    }
 
 
    res.sendStatus(400);
   
   
   
});
 
app.post('/users', (req,res)=>{
   
    users.push(req.body);
    res.sendStatus(200);
});
 
app.delete('/users', (req,res)=>{
   
 
    for (let i = 0 ; i<users.length;i++){
 
        if(users[i].id==req.body.id){
            users.splice(i,1);
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(400);
   
});

