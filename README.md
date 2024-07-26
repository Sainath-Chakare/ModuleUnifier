# module-unifier

module-unifier is a Node.js package that simplifies the process of requiring both npm packages and local files. It provides a unified interface for importing modules, reducing boilerplate code and improving code readability.

## Installation

You can install module-unifier using npm:

```bash
npm install module-unifier

Usage
Here are some examples of how to use module-unifier:

Basic Usage
const { express, path, fs } = require('module-unifier');

// Now you can use express, path, and fs as if you've required them individually
const app = express();
const filePath = path.join(__dirname, 'example.txt');
const fileContents = fs.readFileSync(filePath, 'utf8');

Requiring Local Files
You can also use module-unifier to require local files:
const { express, 'myUtil': './utils/myUtil.js' } = require('module-unifier');

// Now you can use express and myUtil
const app = express();
myUtil.doSomething();


Multiple Imports
module-unifier allows you to import multiple modules in a single line:
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



Features

Unified interface for requiring npm packages and local files
Reduces boilerplate code
Improves code readability
Provides helpful error messages for missing modules

Contributing
Contributions are welcome! Please feel free to submit a Pull Request.