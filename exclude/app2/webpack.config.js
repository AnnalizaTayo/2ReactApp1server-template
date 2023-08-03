const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app2.bundle.js',
    path: path.resolve(__dirname, '../../dist'),
  },
  mode: 'development', // or 'production'
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add '@babel/preset-react'
          },
        },
      },
    ],
  },
  
};
