const {Router, request} = require('express');
const promisePool = require('../database/dbPool');

const router =Router();

//peticion get
router.get('/',async(req, res) => {

    const [data] = await promisePool.query("select * from users");


    res.json({
        msg:"success",
        data
    });
})

//post enviar
router.post('/',async(req, res) => {

    const newUser = req.body;
    const query= `INSERT INTO users (name_user,email,password,status_user) VALUES('${newUser.name_user}','${newUser.email}','${newUser.password}',"1")`
    const data = await promisePool.query(query);


    res.json({
        msg:"post",
        data: data
    });
})


module.exports = router;
