const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    console.log("메인서버 접근");
})

module.exports = router
