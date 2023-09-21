const path = require('path')
const webpack = require('webpack')
const prod = process.argv.includes('-p')

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'game.js'
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-export-default-from']
                  }
                }
            },
            {
                test: /\.(vert|frag)$/,
                use: ['raw-loader']
              }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          PIXI: 'pixi.js'
        })
        
      ],
    devtool: prod ? false : 'source-map',
    stats: 'errors-only',
    mode: prod ? 'production' : 'development'
}