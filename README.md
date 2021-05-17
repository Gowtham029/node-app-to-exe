# node-app-to-exe
Convert node application into simple exe file

## Prerequisites
- [Node.js](https://nodejs.org/en/)


## Installation

```
$ npm i
```

## Build

## Add the build script in package.json
```
"scripts": {
        "build": "nexe --resource \" ./files/**/* \" "
    }
```

#### We are ready to convert the sources to exe now

```
npm run build
```


## Test

Execute the generated ```node-exec.exe``` and navigate to the http://localhost:3000/.

