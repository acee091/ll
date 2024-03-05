var express = require('express')
// rota
var router = express.Router()

const path = require('path')

// ../templates -> volta a pasta(que esta no user) e ir pra templates
const basePath = path.join(__dirname, '../templates')

// obtem uma requisição e manda uma resposta
router.get('/:id', (req, res) =>{
    console.log(`Carregando usuário:${req.params.id}`)
    
    res.sendFile(`${basePath}/user.html`)
})

router.get('/add', (req, res)=>{
    res.sendFile(`${basePath}/user.html`)
    // chamando o html
})

router.post('/save', (req, res)=>{
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age

    console.log(name)
    console.log(age)
})

module.exports = router