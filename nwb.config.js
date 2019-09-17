var path = require('path');

module.exports = {
  type: 'react-app',
  webpack: {
    rules: {
      babel: {
        test: /\.jsx?/
      },
    },
    extra: {
      resolve: {
        extensions: ['.js', 'index.js', '.jsx'],
      },
      
      module: {
        rules: [
          {
            test: /\.pdf$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
              }
            ]
          }
        ]
      },
    },
    publicPath: '',
    html: {
      template: 'client/index.html'
    },
    aliases: {
      // Enable use of 'img/file.png' paths in JavaScript and
      // "~images/file.png" paths in stylesheets to require an image from
      // src/images from anywhere in the the app.
      'assets': path.resolve('client/assets'),
      // Enable use of require('src/path/to/module.js') for top-down imports
      // from anywhere in the app, to promote writing location-independent
      // code by avoiding ../ directory traversal.
      // 'src': path.resolve('src')
    },
  },

}
