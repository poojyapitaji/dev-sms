const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.jsx'),
    resolve: {
        extensions: ['*', '.jsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext][query]',
                },
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext][query]',
                },
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './public/index.html'),
        }),
    ],
    stats: 'errors-only',
}
