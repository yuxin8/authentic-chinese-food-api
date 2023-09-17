import { NextFunction, Request, Response } from 'express'

const errorHandler = (err: any, req: Request, res: Response, _: NextFunction) => {
  res.status(err.statusCode ||  500).json({
    success: false,
    error: err.message || 'Server error.',
  })
}

export { errorHandler }