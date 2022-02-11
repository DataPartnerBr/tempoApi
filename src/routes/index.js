const express = require('express');
const router = express.Router();
const fs = require('fs')
const csv = require('csv-parser')



router.get('/', async(req, res, next)=> {

    const users = [];
    try {
        fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', function (row) {
          const user = {
            nome: row.nome,
            nascimento: row.nascimento,
            endereco: row.endereco,
            cep: row.cep,
            cidade: row.cidade,
            estado: row.estado
          }
          users.push(user)
        })
        .on('end', function () {
          console.table(users)
          res.send(users);
        })

  } catch (err) {
    next(err);
  }
})

module.exports = router;