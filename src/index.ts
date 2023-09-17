import { NODE_ENV, PORT } from './config/index'
import app from './app'

const SERVER_PORT = PORT || 3001

const server = app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode at https://localhost:${SERVER_PORT}`)
})

const shutdown = (exitCode: number) => {
  console.log('Closing HTTP server.')
  server.close(() => {
    console.log('HTTP server closed.')
    process.exit(exitCode)
  })
}

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.')
  shutdown(0)
})

process.on('SIGINT', () => {
  console.info('SIGINT signal received.')
  shutdown(0)
})

process.on('unhandledRejection', (error: unknown) => {
  if (error instanceof String) console.error('Error: $e')
  else if (error instanceof Error) console.error(`Error: ${error.message}`)
  shutdown(1)
})