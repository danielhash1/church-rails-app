const { environment } = require('@rails/webpacker');
const webpack = require('webpack');

// Настройка загрузчика для Babel
environment.loaders.append('babel', {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
});

// Фоллбеки и настройка
environment.config.merge({
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "assert": require.resolve("assert"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "url": require.resolve("url")
    }
  },
  node: false
});

module.exports = environment;
