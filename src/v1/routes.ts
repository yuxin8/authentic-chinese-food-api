import express from 'express'

const router = express.Router()

router.get('/healthcheck', (req, res) => {
  res.json({ success: true, data: { name: 'authentic-chinese-food-api' } })
})

export { router }