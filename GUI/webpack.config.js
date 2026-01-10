module.exports = {
    mode: "development",
    target: "node",
    entry: './src/main.js',
    module: {
        rules: [
          {
            test: /\.node/i,
            use: [
              { loader: "node-loader" },
            ]
          }
        ]
      },
    resolve : {
        fallback: {
            path: false
        }
    }
}