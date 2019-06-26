const express = require('express')
const path = require('path')
//const cookieParser = require('cookie-parser') não é mais necessario na versao do node
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const expressValidator = require('express-validator')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/loginapp',{ useNewUrlParser: true});
/*
mongo
use loginapp
db.dropDatabase();
show dbs
use loginapp
db.createCollection('users');
show collections -> tem que mostrar users
*/
//Aqui vamos iniciar o app e vamos definir duas variaveis
const app = express();
const routes = require('./routes/index');
const users = require('./routes/users');
// nessa parte definimos o nome do diretorio para o layout atual e vamos usar o visual com handlebars
// pra isso dizemos a engina para usar handlebars
app.set('views', path.join(__dirname, 'views'));
app.use(expressValidator({
    errorFormatter: function(param, msg, value){
        var namespace = param.split('.')
        , root = namespace.shift()
        , formParam = root;
        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

//para trabalhar com json 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
//app.use(cookieParser()) linha desnecessário, a não ser que seu node precise

// Seta um caminho estatico
app.use(express.static(path.join(__dirname, 'public')));

//Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));
// Passport Init
app.use(passport.initialize());
app.use(passport.session());

//O validador express retirado do Digital Ocean, mas basicamente quer dizer:
// separar uma string em substring para criar um array 
//remove o ultimo elemento do array


//Quase tudo na web usa flash
app.use(flash());

//copiei da internet essa parte 

app.use(function (req, res, next){
    res.locals.successs_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//setando as variaveis definidas cima
app.use('/', routes);
app.use('/users', users);


// ouvindo na porta 3000, mas em linux normalmente o NTOP está rodando
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
    console.log('Server started on port '+app.get('port'));
});








