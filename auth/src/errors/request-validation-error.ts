import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
    statusCode = 400;
    constructor(public errors: ValidationError[]) {
        super();

        // only because we are extending a build in class
        // Set Type of Error to DatabaseConnectionError -> instanceof
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map(error => {
            return { message: error.msg, field: error.param }
        })
    }
}