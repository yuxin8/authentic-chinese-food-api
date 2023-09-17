import express from 'express'
import { v1Router } from './v1'
import { errorHandler } from './middleware/error-handler'
import { notFoundHandler } from './middleware/not-found-handler'

const app = express()

app.use(express.json())

app.use('/v1', v1Router)
app.use(notFoundHandler)
app.use(errorHandler)

export default app