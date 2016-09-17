var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main',
    output: {
        path: 'dev',
        filename: 'app.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|dev)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2'],
                    plugins: ['react-html-attrs']
                }
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
            },
            {
                test: /\.jpg$/,
                exclude: /(node_modules|dev)/,
                loader: "url-loader?limit=1000000&mimetype=image/jpg"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
