const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  console.log('req.body::', req.body)
  // console.log('req.query::', req.query)
  const { apikey } = req.query
  const validApikeies = [123456]

  console.log(apikey.toFixed(2)) // 500대 에러는 서버쪽에 문의

  if (!validApikeies.includes(Number(apikey))) {
    return res.status(401).json('유효한 정보가 아닙니다!')
  }
  return res.status(200).json({  // JSON.stringify()
    name: 'First Todos API!'
  })
})

router.post('/', (req, res) => {
  console.log('req.body::', req.body)
  res.status(200).json(true)
})

// https://abc.com/api/todos/123456789
router.put('/:id', (req, res) => {
  console.log('req.params::', req.params)
  res.status(200).json(true)
})

// 권장
router.delete('/:id', (req, res) => {
  console.log('req.params::', req.params)
  res.status(200).json(true)
})
// // VS
// router.delete('/', (req, res) => {
//   console.log('req.body::', req.body)
//   const { id } = req.body
//   res.status(200).json(true)
// })
// // VS
// router.post('/delete', (req, res) => {
//   console.log('req.body::', req.body)
//   const { id } = req.body
//   res.status(200).json(true)
// })

module.exports = router
