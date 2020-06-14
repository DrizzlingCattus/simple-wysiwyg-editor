const path = require('path');

const config = {
  mode: 'development',

  entry: './src/index.js',

  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json'],
  },

  output: {
    path: path.resolve(`${__dirname}/dist`),
    filename: 'bundle.js',
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        // .mjs(module js) or .js(normal js)
        test: /\.(m?js|js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ], // rules
  }, // module

  devServer: {
    contentBase: [path.join(__dirname, 'dist')],
    port: 9999,
    host: '0.0.0.0',
    open: false,
  },

};

module.exports = config;
