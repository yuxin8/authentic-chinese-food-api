import { NextFunction, Request, Response } from 'express'
import { ErrorResponse } from '../utils/ErrorResponse'

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  next(new ErrorResponse('Growl... resource not found.', 404))
}

export { notFoundHandler }