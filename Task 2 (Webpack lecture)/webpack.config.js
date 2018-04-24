const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env, options) {
  const isProduction = options.mode === 'production';

  const config = {
    context: path.join(__dirname, 'src'),
    entry: './index.jsx',
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Task 2',
        hash: true,
        template: path.resolve(__dirname, './index.html')
      })
    ]
  };

  return config;
};
