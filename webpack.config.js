const path = require('path');

module.exports = {
  entry: {
    app1: './exclude/app1/src/index.js',
    app2: './exclude/app2/src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].v1.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add '@babel/preset-react' here
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // ...
    ],
  },
}