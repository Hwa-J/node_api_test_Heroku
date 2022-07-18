const express = require('express')
const cors = require('cors')

global.appRoot = __dirname

const app = express()
app.use(express.json())
app.use(cors())
// app.use(cors({
//   origin: ['http://localhost:'] 화이트리스트
// }))
app.use('/api/todos', require('./routes/api/todos.js') )
// app.use('/', (req, res) => {
//   res.status(200).json({
//     name: 'Heropy!!!'
//   })
// })

const port = process.env.PORT || 1234 // port 번호는 그 환경에서 필요한 번호로
// http://localhost:1234/api/todos?a=1&b=hwaJ
// https://abc.com/
app.listen(port, () => {
  console.log('서버 동작~')
})