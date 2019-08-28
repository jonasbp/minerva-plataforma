//modelo de um servico de problemas estruturais (estruturais)

const mongoose = require('mongoose')

mongoose.model('painting', {
            area: {
                type: Number,
                require: true
            },
            tipo_tinta: {
                type: String,
                require: true
            },
            cor: {
                type: String,
                require: false
            },
            de_que: {
                type: String,
                require: true
            },
            emassar: {
                type: Boolean,
                require: true
            },
            ambiente_interno: {
                type: Boolean,
                require: true
            }
            
}) 
