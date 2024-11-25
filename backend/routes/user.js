const express = require('express')
const router = express.Router()
const conn = require('../config/db')

router.post('/join', (req, res)=>{
    console.log('회원가입요청');
    console.log(req.body);

    let {id, pw, nick} = req.body;
    let sql = 'INSERT INTO NODEJS_MEMBER VALUES(?,?,?)';

    conn.query(sql, [id,pw,nick], (err, rows)=>{
        if(err) { console.log('회원가입 오류발생', err); }

        if(rows){
            res.json({result:'success'})
        }else{
            res.json({result:'fail'})
        }
    });  

});

router.post('/login', (req,res)=>{
    console.log('로그인요청');

    let {id, pw} = req.body;
    let sql = "SELECT * FROM NODEJS_MEMBER WHERE ID=? and PW=?";

    conn.query(sql, [id,pw], (err, rows)=>{
        if(err) { console.log('로그인 오류발생', err); }

        console.log(rows);

        if(rows.length > 0){
            res.json({result:"success", nick:rows[0].NICKNAME});
        }else{
            res.json({result:"fail"});
        }
    })

})

module.exports = router