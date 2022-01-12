const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
const cors = require('cors');


router.use(cors());
router.use(express.json());
//String de conexão

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '1998ronca',
    database: 'formula_magica'
});

//conexão com o banco

connection.connect(function(error)
    {
        if(!!error){
            console.log(error)
        }else{
            console.log('Conectado')
        }
    }
)

//rota para requisitar dados de uma empresa
router.get('/listar-empresa', (req,res)=>{
    let ticker = prompt('digite');
    console.log(req)
    connection.query(`SELECT * FROM Empresa WHERE ticker = '${ticker}';`,
    (error, rows) =>{
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }
    })
});

//rota para requisitar dados do ranking
router.get('/listar-ranking', (req,res)=>{
    connection.query('SELECT * FROM ranking ORDER BY earning_yeld DESC',
    (error, rows) =>{
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }
    })
    
});

//Métodos para integração


module.exports = router;
