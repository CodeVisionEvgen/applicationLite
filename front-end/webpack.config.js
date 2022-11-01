const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        basicApp: {
            import: './src/index.js',
            filename: 'basicApp.js'
        }
    },
    output: {
        path: path.resolve(__dirname, 'build/static'),
        publicPath: '/'
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },    
    devServer: {
        hot: true,
        port: 3000,
        host: '0.0.0.0',
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: {
                    host: "localhost",
                    protocol: "http:",
                    port: 4000
                }
            },
        ignorePath: true,
        changeOrigin: true,
        secure: false
        }
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                         loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
