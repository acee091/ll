const express = require("express")
// vai ouvir a porta 3000
const port = 3000
const app = express()
const path = require("path")
const user= require('./user')
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

app.use('/user', user)
app.use(checkAuth)

// NOME DO DIRETORIO, TEMPLATES
const basePath = path.join(__dirname, 'Templates')


// le o  conteudo de uma html
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())
// arquivos estaticos: estilizar e adicionar interatividade
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})
app.listen(port, ()=>{
    console.log(`App rodando na porta: ${port}`)
})

// DEPENDENCIA DE DESENVOLVIMENTO(--save-dev )
// npm install nodemon --save-dev