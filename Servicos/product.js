var Product = require('../models/product');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/meubanco',{ useNewUrlParser: true })
//precisa ajeitar o nome desse banco

//esses produtor são servicos a serem mostrados com handlebars

var products = [
    new Product({
    imagePath: '',
    title: 'aqui vai um serviço',
    description: 'aqui vai a descriacao',
    price: 10
}),
new Product({
    imagePath: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjgmZ-2tNfiAhU9IbkGHTsCDSwQjRx6BAgBEAU&url=http%3A%2F%2Fnoticias.universia.com.br%2Femprego%2Fnoticia%2F2017%2F05%2F25%2F1152776%2F5-modos-reduzir-tensao-trabalho.html&psig=AOvVaw2XJWWURR3KfYNyLgf6HB-8&ust=1559998218654273',
    title: 'Um cara trabalhando',
    description: 'Importantejdijs',
    price: 20
}),
new Product({
    imagePath: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwici-fGtNfiAhX9GrkGHcKuBEsQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Ftangerino.com.br%252Fjornada-de-trabalho-flexivel-e-essencial-para-o-crescimento-do-negocio%252F%26psig%3DAOvVaw2XJWWURR3KfYNyLgf6HB-8%26ust%3D1559998218654273&psig=AOvVaw2XJWWURR3KfYNyLgf6HB-8&ust=1559998218654273',
    title: 'Um cara mostrando uma coisa',
    description: 'acho legal!!!',
    price: 300
})
];

var done = 0;

for(var i=0; i< products.length; i++){
    products[i].save(function (err,result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
mongoose.disconnect();
}
