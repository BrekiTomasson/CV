const mix = require('laravel-mix');
require('mix-tailwindcss')

// Options and stuff.
mix.disableNotifications()
    .options({
        clearConsole: false,
    })

// Do the things and the stuff with Javascript.
mix.js('resources/js/app.js', 'public/assets/js')

// Do the things and the stuff with SASS.
mix.sass('resources/sass/app.scss', 'public/assets/css')
    .tailwind('./tailwind.config.js');
