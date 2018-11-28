const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: "/output/",
        path: path.resolve(__dirname, 'output')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 3001,
        hot: true,
        open: true,
        compress: true,
        inline: true,
        watchContentBase: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'output'),
        overlay: true,
        watchOptions: {
            poll: true
        }
    }
}