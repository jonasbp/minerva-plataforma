//modelo de um servico de problemas eletricos (eletrico)

const mongoose = require('mongoose')

mongoose.model('eletrico', {
            lampada: {
                type: Boolean,
                require: true
            },
            ambiente_com_circuito: {
                type: Boolean,
                require: true
            },
            bocal_para_lampada: {
                type: Boolean,
                require: false
            },
            tomada: {
                type: Boolean,
                require: true
            },
            circuito_para_tomada: {
                type: Boolean,
                require: true
            },
    
}) 
