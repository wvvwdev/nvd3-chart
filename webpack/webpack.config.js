var webpack = require('webpack');
var path = require('path');



module.exports = {
  entry: {
    'main': `${__dirname}/../src/index.ts`
  },

  resolve: {
    extensions: ['.ts','.js','.json','.css'],
    modules: [
      path.resolve(`${__dirname}/../`, 'node_modules'),
      path.resolve(`${__dirname}/../`, 'src'),
    ]
  },

  output: {
    path: path.resolve(`${__dirname}/../`, 'build'),
    library: 'nvd3-chart',
    libraryTarget: 'umd',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['raw-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      path.resolve(`${__dirname}/../`, 'src'),
      {
        // your Angular Async Route paths relative to this root directory
      }
    )
  ],

  /*
  * Include polyfills or mocks for various node stuff
  * Description: Node configuration
  *
  * See: https://webpack.github.io/docs/configuration.html#node
  */
  node: {
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
