// isso vai ser o modelo do eletrico

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require(/*modelo do eletrico */)

const Eletrico = mongoose.model('eletrico')
const route = express()


route.post('/paiting', (req,res) => {
    var newEletrico = {
        area: req.body.area,
        tipo_tinta: req.body.tipo_tinta,
        cor: req.body.cor
    }
    var eletrico = new Eletrico(newEletrico)
    eletrico.save().then(() => {
        res.send('pedido feito com sucesso')
    }).catch(err => {
        if(err) throw err
    })
    res.send('fim do pedido')
})

route.get('/eletrico', (req,res) => {
    Eletrico.find().then((eletrico) => {
            res.json(eletrico)
    }).catch(err => {
        if(err) throw err
    })
})

route.get('/eletrico/:id', (req,res) => {
    Eletrico.findById(req.params.id).then((eletrico) => {
        if(eletrico) res.send(eletrico)
        else res.sendStatus(404)
    }).catch(err => {
        if(err) throw err
    })
})

route.delete('/eletrico/:id', (req,res) => {
    Eletrico.findOneAndRemove(req.params.id).then(() => {
        res.send('removido com sucesso')
    }).catch(err => {
        if(err) throw err
    })
})


route.listen(3000, () => {
    console.log('rodando')
})
