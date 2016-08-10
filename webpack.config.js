module.exports = {
    entry: './src/main',
    output: {
        path: 'dev/app',
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
                    presets: ['es2015', 'react'],
                    plugins: ['react-html-attrs']
                }
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
