export class DatabaseConnectionError extends Error {
    reason = 'Error connecting to database'
    constructor() {
        super();

        // Set Type of Error to DatabaseConnectionError -> instanceof
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }
}