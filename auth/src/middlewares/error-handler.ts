import { Request, Response, NextFunction } from "express";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-validation-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    console.log('Handling this error as request validation error');
  }
  if (err instanceof DatabaseConnectionError) {
    console.log('Handling this error as Database Connection Error')
  }


  res.status(400).send({
    message: err.message 
  });
};