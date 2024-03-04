const express = require("express")
// vai ouvir a porta 3000
const port = 3000
const app = express()
const path = require("path")

var checkAuth = function(req, res, next){
    // verificar se o usuario esta logado
    req.authStatus = true

    if(req.authStatus){
        console.log(`Está logado, pode continuar`)
        next()
    }else{
        console.log('Não está logado, faça o login para continuar')
    }
}
app.use(checkAuth)

// NOME DO DIRETORIO, TEMPLATES
const basePath = path.join(__dirname, 'Templates')
// obtem uma requisição e manda uma resposta

// le o  conteudo de uma html
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.get('/user/add', (req, res)=>{
    res.sendFile(`${basePath}/userform.html`)
    // chamando o html
})

app.post('/user/save', (req, res)=>{
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age
    console.log(name)
    console.log(age)
})

app.get('/user/:id', (req, res) =>{
    console.log(`Carregando usuário:${req.params.id}`)
    
    res.sendFile(`${basePath}/user.html`)
})


app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})
app.listen(port, ()=>{
    console.log(`App rodando na porta: ${port}`)
})

// DEPENDENCIA DE DESENVOLVIMENTO(--save-dev )
// npm install nodemon --save-dev