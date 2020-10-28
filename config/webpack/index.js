const config = require('..')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const rules = require('./rules')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  devServer: {
    contentBase: path.resolve(config.paths.publicRoot),
    hot:  true,
    overlay: {
      warnings: false,
      errors: false
    }
  },

  entry: path.resolve(config.paths.jsRoot, 'App.js'),

  mode: 'production',

  module: {
    rules: rules
  },

  resolve: {
    alias: {
      '@': path.resolve(config.paths.jsRoot)
    },
    extensions: ['.js', '.json']
  },

  optimization: {
    emitOnErrors: false,
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          ecma: 5,
          mangle: {
            // eval: true,
            toplevel: true
          },
          module: false,
          output: {
            ascii_only: true,
            comments: false,
            ecma: 5,
            // max_line_len: 120,
            // preserve_annotations: true,
            webkit: true
          },
          toplevel: true,
          keep_classnames: false
        }
      })
    ]
  },

  output: {
    crossOriginLoading: 'anonymous',
    path: path.resolve(config.paths.publicRoot, 'assets'),
    filename: '[name].js',
    pathinfo: true,
    publicPath: '/assets/'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    }),

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: path.resolve(config.paths.publicRoot, 'index.html')
    }),

    new HtmlWebpackPlugin({
      filename: `${config.paths.publicRoot}/scripts.php`,
      template: `${config.paths.templateRoot}/scripts.ejs`,
      inject: false
    }),

    new HtmlWebpackPlugin({
      filename: `${config.paths.publicRoot}/styles.php`,
      template: `${config.paths.templateRoot}/styles.ejs`,
      inject: false
    }),

    new OptimizeCssAssetsPlugin(({
      assetNameRegExp: /.css$/gi,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            autoprefixer: true,
            calc: true,
            colormin: true,
            convertValues: true,
            core: true,
            cssDeclarationSorter: true,
            discardComments: { removeAll: true },
            discardDuplicates: true,
            discardEmpty: true,
            discardOverridden: true,
            discardUnused: false,
            filterOptimiser: true,
            functionOptimiser: true,
            mergeIdents: true,
            mergeLonghand: true,
            mergeRules: true,
            minifyFontValues: true,
            minifyGradients: true,
            minifyParams: true,
            minifySelectors: true,
            normalizeCharset: true,
            normalizeRepeatStyle: true,
            normalizeString: true,
            normalizeTimingFunctions: true,
            normalizeUrl: false,
            normalizeWhitespace: true,
            orderedValues: true,
            reduceBackgroundRepeat: true,
            reduceIdents: true,
            reduceInitial: true,
            reducePositions: true,
            reduceTimingFunctions: true,
            reduceTransforms: true,
            safe: true,
            svgo: true,
            uniqueSelectors: true,
            zindex: false
          }
        ]
      }
    }))
  ],

  stats: {
    all: false,
    colors: true,
    errors: true
  }
}
