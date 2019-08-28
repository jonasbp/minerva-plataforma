// isso vai ser o modelo do painting

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require(/*modelo do painting */)

const Hidraulico = mongoose.model('hidraulico')
const route = express()


route.post('/hidraulico', (req,res) => {
    var newPainting = {
        area: req.body.area,
        tipo_tinta: req.body.tipo_tinta,
        cor: req.body.cor
    }
    var hidraulico = new Hidraulico(newPainting)
    hidraulico.save().then(() => {
        res.send('pedido feito com sucesso')
    }).catch(err => {
        if(err) throw err
    })
    res.send('fim do pedido')
})

route.get('/hidraulico', (req,res) => {
    Hidraulico.find().then((hidraulico) => {
            res.json(hidraulico)
    }).catch(err => {
        if(err) throw err
    })
})

route.get('/painting/:id', (req,res) => {
    Painting.findById(req.params.id).then((painting) => {
        if(painting) res.send(painting)
        else res.sendStatus(404)
    }).catch(err => {
        if(err) throw err
    })
})

route.delete('/painting/:id', (req,res) => {
    Painting.findOneAndRemove(req.params.id).then(() => {
        res.send('removido com sucesso')
    }).catch(err => {
        if(err) throw err
    })
})


route.listen(3000, () => {
    console.log('rodando')
})//modelo de um servico de problemas hidraulicos (hidraulicos)

const mongoose = require('mongoose')

mongoose.model('hidraulico', {
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
