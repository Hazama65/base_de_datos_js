const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const myconnection = require('express-myconnection');
const dbConfig = require('../database/dbconfig');


class Server{

    constructor(){
        this.app = express();
        this.port = 8080;
        this.paths={
            user: '/api/usuarios',
        }
        this.middleware();

        this.routes();

    }
    middleware(){
        //lectura y parseo del body
        this.app.use(express.json());   

        //directorio publico
        this.app.use(express.static('public'))

        //cors
        this.app.use(cors());
        
        //myconnection
        this.app.use(myconnection(mysql, dbConfig, 'request'));
    }

    routes(){
        this.app.use(this.paths.user, require('../routers/user.routes'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
                    console.info(`Servidor corriendo en el puerto ${this.port}`);
                });
    }


}
module.exports = Server;
