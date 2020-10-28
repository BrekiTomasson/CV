const path = require('path')

module.exports = {
  paths: {
    packageRoot: path.resolve(__dirname, '..'),
    publicRoot: path.resolve(__dirname, '../public'),
    jsRoot: path.resolve(__dirname, '../resources/js'),
    cssRoot: path.resolve(__dirname, '../resources/css'),
    templateRoot: path.resolve(__dirname, '../resources/templates')
  }
}
