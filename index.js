const path = require('path');
const fs = require('fs');

function resolveModule(name, basePath){
   if(name.startsWith('./') || name.startsWith('../')){
      const fullPath = path.join(basePath, name);
      if(fs.existsSync(fullPath)){
         return require(fullPath);
      }else{
         throw new Error(`Local file not found: ${fullPath}`);
      }
   }else{
      try{
         return require(path.join(basePath, 'node_modules', name));
      }catch(error){
         if(error.code === 'MODULE_NOT_FOUND'){
            try{
               return require(name);
            }catch(globalError){
               throw new Error(`NPM package '${name}' is not installed. Please run 'npm install ${name}' to install it.`);
            }
         }else{
            throw new Error(`Error requiring NPM package '${name}': ${error.message}`);
         }
      }
   }
}

module.exports = new Proxy({}, {
   get(target, prop) {
      return resolveModule(prop, process.cwd());
   }
});