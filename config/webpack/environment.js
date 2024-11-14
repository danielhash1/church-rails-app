const { environment } = require('@rails/webpacker')

environment.config.merge({
    resolve: {
      fallback: {
        // Укажите фоллбеки для модулей, если это необходимо
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "url": require.resolve("url")
      }
    },
    node: false // Отключите недопустимые свойства
  });

module.exports = environment
