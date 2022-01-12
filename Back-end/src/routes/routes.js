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

router.get('/listar-empresa', (req,res)=>{
    let ticker = 'ENAT3';
    connection.query(`SELECT * FROM Empresa WHERE ticker = '${ticker}';`,
    (error, rows) =>{
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }
    })
})

//Métodos para integração


module.exports = router;