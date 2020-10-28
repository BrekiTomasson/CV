const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {

  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  purge: false,

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },

      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              fontWeight: 900,
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900')
            },
            h2: {
              fontWeight: 700,
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900')
            },
            h3: {
              fontWeight: 600,
              color: theme('colors.gray.900')
            },
            'ol li:before': {
              fontWeight: 600,
              color: theme('colors.gray.500')
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400')
            },
            code: {
              color: theme('colors.gray.900')
            },
            a: {
              color: theme('colors.gray.900')
            },
            pre: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800')
            },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            }
          }
        }
      }),
      colors: {
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-plugins/gradients'),
    require('@tailwindcss/typography'),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("../../resources/fonts/Inter-roman.var.woff2") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src: 'url("../../resources/fonts/Inter-italic.woff2") format("woff2")',
          },
        },
      ])
    }]
}
