// isso vai ser o modelo do painting

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require(/*modelo do painting */)

const Painting = mongoose.model('painting')
const route = express()


route.post('/paiting', (req,res) => {
    var newPainting = {
        area: req.body.area,
        tipo_tinta: req.body.tipo_tinta,
        cor: req.body.cor
    }
    var painting = new Painting(newPainting)
    painting.save().then(() => {
        res.send('pedido feito com sucesso')
    }).catch(err => {
        if(err) throw err
    })
    res.send('fim do pedido')
})

route.get('/painting', (req,res) => {
    Painting.find().then((painting) => {
            res.json(painting)
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
})
