const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        open: true,
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new Dotenv({ path: path.resolve(__dirname, '..', './.env.dev'), allowEmptyValues: true }),
    ],
}
