exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^node_modules/,
        'main.js': /^app/
      },
      order: {
        after: [/\.html$/, /\.css$/]
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'main.js'
    }
  },
  plugins: {
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions']),
        require('csswring')
      ]
    }
  }
};
