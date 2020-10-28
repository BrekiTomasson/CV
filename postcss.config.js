const tailwindConfig = require('./tailwind.config')

module.exports = {
  plugins: [
    ['cssnano', {
      safe: true,
      autoprefixer: true,
      discardComments: true,
      calc: true,
      colormin: true,
      convertValues: true,
      core: true,
      discardDuplicates: true,
      discardEmpty: true,
      discardOverridden: true,
      discardUnused: true,
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
      normalizeUrl: true,
      orderedValues: true,
      reduceBackgroundRepeat: true,
      reduceIdents: true,
      reduceInitial: true,
      reducePositions: true,
      reduceTimingFunctions: true,
      reduceTransforms: true,
      svgo: true,
      uniqueSelectors: true,
      zIndex: true
    }],
    ['tailwindcss', tailwindConfig],
    ['autoprefixer', {}]
  ]
}
