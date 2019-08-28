//modelo de um servico de problemas hidraulicos (hidraulicos)

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
