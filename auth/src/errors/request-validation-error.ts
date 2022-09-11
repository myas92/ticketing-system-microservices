import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
    constructor(private errors: ValidationError[]) {
        super();

        // only because we are extending a build in class
        // Set Type of Error to DatabaseConnectionError -> instanceof
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}