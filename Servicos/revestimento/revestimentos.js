// isso vai ser o modelo do revestimento

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require(/*modelo do revestimento */)

const Revestimento = mongoose.model('revestimento')
const route = express()


route.post('/revestimento', (req,res) => {
    var newRevestimento = {
        area: req.body.area,
        tipo_tinta: req.body.tipo_tinta,
        cor: req.body.cor
    }
    var revestimento = new Revestimento(newRevestimento)
    revestimento.save().then(() => {
        res.send('pedido feito com sucesso')
    }).catch(err => {
        if(err) throw err
    })
    res.send('fim do pedido')
})

route.get('/revestimento', (req,res) => {
    Revestimento.find().then((revestimento) => {
            res.json(revestimento)
    }).catch(err => {
        if(err) throw err
    })
})

route.get('/revestimento/:id', (req,res) => {
    Revestimento.findById(req.params.id).then((revestimento) => {
        if(revestimento) res.send(painting)
        else res.sendStatus(404)
    }).catch(err => {
        if(err) throw err
    })
})

route.delete('/revestimento/:id', (req,res) => {
    Revestimento.findOneAndRemove(req.params.id).then(() => {
        res.send('removido com sucesso')
    }).catch(err => {
        if(err) throw err
    })
})


route.listen(3000, () => {
    console.log('rodando')
})//modelo de um servico de problemas revestimentos (revestimentos)

const mongoose = require('mongoose')

mongoose.model('revestimento', {
            pia: {
                type: Number,
                require: true
            },
            Qual_ambiente: {
                type: String,
                require: true
            },
            material: {
                type: String,
                require: false
            },
            dimensoes: {
                type: String,
                require: true
            },
            possui_estrutura: { //estrutura para a sustentacao da pia
                type: Boolean,
                require: true
            },
            torneira: {
                type: Number,
                require: true
            }
            
}) 
