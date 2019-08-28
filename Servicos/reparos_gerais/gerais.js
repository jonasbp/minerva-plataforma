// isso vai ser o modelo do geral

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require(/*modelo do geral */)

const Geral = mongoose.model('geral')
const route = express()


route.post('/paiting', (req,res) => {
    var newGeral = {
        area: req.body.area,
        tipo_tinta: req.body.tipo_tinta,
        cor: req.body.cor
    }
    var geral = new Geral(newGeral)
    geral.save().then(() => {
        res.send('pedido feito com sucesso')
    }).catch(err => {
        if(err) throw err
    })
    res.send('fim do pedido')
})

route.get('/geral', (req,res) => {
    Geral.find().then((geral) => {
            res.json(geral)
    }).catch(err => {
        if(err) throw err
    })
})

route.get('/geral/:id', (req,res) => {
    Geral.findById(req.params.id).then((geral) => {
        if(geral) res.send(geral)
        else res.sendStatus(404)
    }).catch(err => {
        if(err) throw err
    })
})

route.delete('/geral/:id', (req,res) => {
    Geral.findOneAndRemove(req.params.id).then(() => {
        res.send('removido com sucesso')
    }).catch(err => {
        if(err) throw err
    })
})


route.listen(3000, () => {
    console.log('rodando')
})
