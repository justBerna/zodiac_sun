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
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [{ loader: "file-loader" }]
        },
        ]
      },
    resolve : {
        fallback: {
            path: false
        }
    }
}