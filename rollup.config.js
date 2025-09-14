const terser = require('@rollup/plugin-terser');
const replace = require('@rollup/plugin-replace');
const copy = require('rollup-plugin-copy');
const { readFileSync } = require('fs');

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));
const isProduction = process.env.NODE_ENV === 'production';

const banner = `/**
 * Galleria - v${pkg.version} ${new Date().toISOString().split('T')[0]}
 * ${pkg.homepage || 'https://galleriajs.github.io/'}
 *
 * Copyright (c) 2010 - ${new Date().getFullYear()} ${pkg.author.name}
 * Licensed under the ${pkg.license} License.
 */
`;

module.exports = [
  // Main Galleria build
  {
    input: 'src/galleria.js',
    output: [
      {
        file: 'dist/galleria.js',
        format: 'umd',
        name: 'Galleria',
        banner: banner,
        globals: {
          'jquery': 'jQuery'
        }
      },
      ...(isProduction ? [{
        file: 'dist/galleria.min.js',
        format: 'umd',
        name: 'Galleria',
        banner: banner,
        plugins: [terser()],
        globals: {
          'jquery': 'jQuery'
        }
      }] : [])
    ],
    external: ['jquery'],
    plugins: [
      replace({
        values: {
          '__VERSION__': pkg.version,
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        },
        preventAssignment: true
      }),
      copy({
        targets: [
          { src: 'src/themes/**/*.css', dest: 'dist/themes', flatten: false },
          { src: 'src/themes/**/*.gif', dest: 'dist/themes', flatten: false },
          { src: 'src/themes/**/*.png', dest: 'dist/themes', flatten: false },
          { src: 'src/themes/**/*.jpg', dest: 'dist/themes', flatten: false },
          { src: 'src/themes/**/*.html', dest: 'dist/themes', flatten: false }
        ]
      })
    ]
  },

  // Flickr Plugin
  {
    input: 'src/plugins/flickr/galleria.flickr.js',
    output: [
      {
        file: 'dist/plugins/flickr/galleria.flickr.js',
        format: 'umd',
        name: 'GalleriaFlickr',
        banner: banner,
        globals: {
          'jquery': 'jQuery'
        }
      },
      ...(isProduction ? [{
        file: 'dist/plugins/flickr/galleria.flickr.min.js',
        format: 'umd',
        name: 'GalleriaFlickr',
        banner: banner,
        plugins: [terser()],
        globals: {
          'jquery': 'jQuery'
        }
      }] : [])
    ],
    external: ['jquery'],
    plugins: []
  },

  // History Plugin
  {
    input: 'src/plugins/history/galleria.history.js',
    output: [
      {
        file: 'dist/plugins/history/galleria.history.js',
        format: 'umd',
        name: 'GalleriaHistory',
        banner: banner,
        globals: {
          'jquery': 'jQuery'
        }
      },
      ...(isProduction ? [{
        file: 'dist/plugins/history/galleria.history.min.js',
        format: 'umd',
        name: 'GalleriaHistory',
        banner: banner,
        plugins: [terser()],
        globals: {
          'jquery': 'jQuery'
        }
      }] : [])
    ],
    external: ['jquery'],
    plugins: []
  },

  // Themes
  {
    input: 'src/themes/classic/galleria.classic.js',
    output: [
      {
        file: 'dist/themes/classic/galleria.classic.js',
        format: 'umd',
        name: 'GalleriaClassic',
        banner: banner,
        globals: {
          'jquery': 'jQuery'
        }
      },
      ...(isProduction ? [{
        file: 'dist/themes/classic/galleria.classic.min.js',
        format: 'umd',
        name: 'GalleriaClassic',
        banner: banner,
        plugins: [terser()],
        globals: {
          'jquery': 'jQuery'
        }
      }] : [])
    ],
    external: ['jquery'],
    plugins: []
  },
  {
    input: 'src/themes/azur/galleria.azur.js',
    output: [
      {
        file: 'dist/themes/azur/galleria.azur.js',
        format: 'umd',
        name: 'GalleriaAzur',
        banner: banner,
        globals: {
          'jquery': 'jQuery'
        }
      },
      ...(isProduction ? [{
        file: 'dist/themes/azur/galleria.azur.min.js',
        format: 'umd',
        name: 'GalleriaAzur',
        banner: banner,
        plugins: [terser()],
        globals: {
          'jquery': 'jQuery'
        }
      }] : [])
    ],
    external: ['jquery'],
    plugins: []
  },
  {
    input: 'src/themes/folio/galleria.folio.js',
    output: [
      {
        file: 'dist/themes/folio/galleria.folio.js',
        format: 'umd',
        name: 'GalleriaFolio',
        banner: banner,
        globals: {
          'jquery': 'jQuery'
        }
      },
      ...(isProduction ? [{
        file: 'dist/themes/folio/galleria.folio.min.js',
        format: 'umd',
        name: 'GalleriaFolio',
        banner: banner,
        plugins: [terser()],
        globals: {
          'jquery': 'jQuery'
        }
      }] : [])
    ],
    external: ['jquery'],
    plugins: []
  },
  {
    input: 'src/themes/fullscreen/galleria.fullscreen.js',
    output: [
      {
        file: 'dist/themes/fullscreen/galleria.fullscreen.js',
        format: 'umd',
        name: 'GalleriaFullscreen',
        banner: banner,
        globals: {
          'jquery': 'jQuery'
        }
      },
      ...(isProduction ? [{
        file: 'dist/themes/fullscreen/galleria.fullscreen.min.js',
        format: 'umd',
        name: 'GalleriaFullscreen',
        banner: banner,
        plugins: [terser()],
        globals: {
          'jquery': 'jQuery'
        }
      }] : [])
    ],
    external: ['jquery'],
    plugins: []
  },
  {
    input: 'src/themes/miniml/galleria.miniml.js',
    output: [
      {
        file: 'dist/themes/miniml/galleria.miniml.js',
        format: 'umd',
        name: 'GalleriaMiniml',
        banner: banner,
        globals: {
          'jquery': 'jQuery'
        }
      },
      ...(isProduction ? [{
        file: 'dist/themes/miniml/galleria.miniml.min.js',
        format: 'umd',
        name: 'GalleriaMiniml',
        banner: banner,
        plugins: [terser()],
        globals: {
          'jquery': 'jQuery'
        }
      }] : [])
    ],
    external: ['jquery'],
    plugins: []
  },
  {
    input: 'src/themes/twelve/galleria.twelve.js',
    output: [
      {
        file: 'dist/themes/twelve/galleria.twelve.js',
        format: 'umd',
        name: 'GalleriaTwelve',
        banner: banner,
        globals: {
          'jquery': 'jQuery'
        }
      },
      ...(isProduction ? [{
        file: 'dist/themes/twelve/galleria.twelve.min.js',
        format: 'umd',
        name: 'GalleriaTwelve',
        banner: banner,
        plugins: [terser()],
        globals: {
          'jquery': 'jQuery'
        }
      }] : [])
    ],
    external: ['jquery'],
    plugins: []
  }
];
