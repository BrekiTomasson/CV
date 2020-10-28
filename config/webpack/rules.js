const path = require('path')
const config = require('..')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let postcssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true
  }
}

let resolveUrlLoader = {
  loader: 'resolve-url-loader',
  options: {
    engine: 'postcss',
    debug: false,
    sourceMap: true,
    absolute: false
  }
}

let sassLoader = {
  loader: 'sass-loader',
  options: {
    sourceMap: true
  }
}

module.exports = [

  // JavaScript Files
  {
    test: /\.js$/i,
    // exclude: file => /node_modules/.test(file),
    use: {
      loader: 'babel-loader',
      options: {
        sourceType: 'unambiguous',
        presets: ['@babel/preset-env'],
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-syntax-import-meta',
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-nullish-coalescing-operator',
          '@babel/plugin-transform-runtime'
        ]
      }
    }
  },

  // CSS
  {
    test: /\.css$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: false,
          importLoaders: 2
        }
      },
      postcssLoader,
      resolveUrlLoader
    ]
  },

  // SCSS
  {
    test: /\.scss$/i,
    exclude: /\.module\.scss/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: false,
          sourceMap: false,
          importLoaders: 3
        }
      },
      postcssLoader,
      sassLoader,
      resolveUrlLoader
    ]
  },

  // Fonts
  {
    test: /\.(?:ttf|eot|woff2?)$/i,
    use: {
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[hash].[ext]'
      }
    }
  }
]



/*
image-trace-loader
image-webpack-loader
raw-loader
*/
