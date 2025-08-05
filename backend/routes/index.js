const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  const routesDir = path.join(__dirname);
  
  fs.readdirSync(routesDir).forEach((file) => {
    if (file === 'index.js') return;

    const route = require(path.join(routesDir, file));
    if (route.path && route.router) {
      app.use('/api' + route.path, route.router);
    }
  });
};
