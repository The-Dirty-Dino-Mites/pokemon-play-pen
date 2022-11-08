const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'src', 'index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'client', 'dist'),
    publicPath: '/'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
};
