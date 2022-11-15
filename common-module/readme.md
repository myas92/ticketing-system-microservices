# Common

1- Install Typescript and del-cli
```
npm i typescript del-cli --save-dev
```

2- Create `tsconfig.json` file
```
tsc --init
```

3- Update script section of `package.json`

```
"scripts": {
  "clean": "del ./build/*",
  "build": "npm run clean && tsc"
}

```

4- Update `tsconfig.json`

 4.1- uncomment

```
"declaration": true,
```

 4.2- uncomment and update path of `outDir`

```
"outDir": "./build"
```



5- install modules
```
npm i express 
express-validator 
jsonwebtoken 
cookie-session 
@types/cookie-session 
@types/express 
@types/jsonwebtoken
```
