const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/public/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/i,
                loader: 'babel-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, './src/components'),
            utils: path.resolve(__dirname, './src/utils'),
            constants: path.resolve(__dirname, './src/constants'),
            styles: path.resolve(__dirname, './src/styles'),
        }
    },
}

module.exports = () => {
    if (isProduction) {
        config.mode = 'production'
    } else {
        config.mode = 'development'
    }
    return config
}
