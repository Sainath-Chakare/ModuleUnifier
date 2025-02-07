﻿<div align="center">
  <h1>module-unifier</h1>
  <p>module-unifier is a Node.js package that simplifies the process of requiring both npm packages and local files. It provides a unified interface for importing modules, reducing boilerplate code and improving code readability.
</p>
</div>

[![NPM Link](https://img.shields.io/npm/v/module-unifier.svg)](https://www.npmjs.com/package/module-unifier)

## 📦 Install
```ts
npm install module-unifier
```

## 🪄 Usage
Here are some examples of how to use module-unifier

## Basic Usage 
```ts
const { express, path, fs } = require('module-unifier');

// Now you can use express, path, and fs as if you've required them individually
const app = express();
const filePath = path.join(__dirname, 'example.txt');
const fileContents = fs.readFileSync(filePath, 'utf8');
```

## Requiring Local Files
```ts
const { express, "./utils/myUtil.js": myUtil } = require('module-unifier');

// Now you can use express and myUtil
const app = express();
myUtil.doSomething();
```

## Multiple Imports
```ts
const {
   express, mongoose, path, passport,
   "method-override": methodOverride,
   "./utils/ExpressError.js": ExpressError,
   "./routes/listing.js": listing,
   "cookie-parser": cookieParser,
   "express-session": session,
} = require("module-unifier");

// Use the imported modules
const app = express();
mongoose.connect(config.dbUri);
```

## 🚀 Features
- Unified interface for requiring npm packages and local files
- Reduces boilerplate code
- Improves code readability
- Provides helpful error messages for missing modules

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
