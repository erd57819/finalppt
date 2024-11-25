const express = require('express')
const app = express()

const indexRouter = require('./routes')
const userRouter = require('./routes/user')

//교차 출러 리소스 공유(CORS)
// - 같은 도메인이 아닌 경우에 요청/응답 제한
// - 모든 요청/응답에 대한 허용을 하거나 특정 도메인에 대해 허용을 해줄 경우
//   'npm i cors'를 설치해야 한다!
const cors = require('cors')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(cors())
app.use('/', indexRouter)
app.use('/user', userRouter)

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), ()=>{
    console.log('Server is running on', app.get('port'));
})