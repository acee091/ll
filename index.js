const express = require("express")
// vai ouvir a porta 3000
const port = 3000
const app = express()
const path = require("path")

// NOME DO DIRETORIO, TEMPLATES
const basePath = path.join(__dirname, 'Templates')
// obtem uma requisição e manda uma resposta
app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})
app.listen(port, ()=>{
    console.log(`App rodando na porta: ${port}`)
})

// DEPENDENCIA DE DESENVOLVIMENTO(--save-dev )
// npm install nodemon --save-dev