# Install Dependencies

```bash
npm i typescript ts-node-dev express @types/express
npm i node-typescript

tsc --init #Create tsconfig.json file
```


## Useful Packages

[ExpressJS Async Errors](https://www.npmjs.com/package/express-async-errors):

This has been lightly reworked to handle async rather than generators. based on [Express handling errors](http://expressjs.com/en/guide/error-handling.html) for async function you must pass error to the `next()`



## Modify a type
```js
// req.currentUser
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}
const payload = jwt.verify(token, salt) as UserPayload
req.currentUser = payload;
```



## Declare a global function for test
```js
// test/setup.ts
declare global {
    function signin(): Promise<string[]>
}
```

## Test Modules
```bash
npm i --save-dev @types/jest
npm i --save-dev @types/supertest
npm i --save-dev jest
npm i --save-dev ts-jest
npm i --save-dev supertest
npm i --save-dev mongodb-memory-server
```