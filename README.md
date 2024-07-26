<div align="center">
  <h1>module-unifier</h1>
  <p>A Node.js package that simplifies the process of requiring both npm packages and local files.</p>
  
  [![npm version](https://img.shields.io/npm/v/module-unifier)](https://www.npmjs.com/package/module-unifier)
  [![npm downloads](https://img.shields.io/npm/dm/module-unifier)](https://www.npmjs.com/package/module-unifier)
</div>

## 📦 Install
npm install module-unifier

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
const { express, 'myUtil': './utils/myUtil.js' } = require('module-unifier');

// Now you can use express and myUtil
const app = express();
myUtil.doSomething();
```

## Multiple Imports
```ts
const { 
  express, 
  mongoose, 
  'config': './config.js',
  'userModel': './models/user.js'
} = require('module-unifier');

// Use the imported modules
const app = express();
mongoose.connect(config.dbUri);
const User = userModel;
```

## 🚀 Features
- Unified interface for requiring npm packages and local files
- Reduces boilerplate code
- Improves code readability
- Provides helpful error messages for missing modules

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.