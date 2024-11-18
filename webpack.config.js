// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
//const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
const __curdir = process.cwd();

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: process.env.ASSET_PATH || '/',
        path: path.resolve(__curdir, 'dist'),
        assetModuleFilename: '[hash][ext][query]',
        clean: true,
    },
    devServer: {
        server: 'https',
        client: {
            overlay: {
                errors: false,
                warnings: false,
                runtimeErrors: false,
            },
        },
        open: true,
        hot: true, // hot loading
        compress: true, // use gzip
        allowedHosts: 'all',
        host: 'localhost',
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                path.resolve(__curdir, "public", "manifest.json"),
                path.resolve(__curdir, "public", "favicon.ico"),
                path.resolve(__curdir, "public", "logo192.png"),
                path.resolve(__curdir, "public", "logo512.png"),
                path.resolve(__curdir, "public", "robots.txt")
            ]
        }),
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    module: {
        rules: [
            {
                test: /\.(js|cjs|mjs|jsx|ts|tsx)$/,
                include: [path.resolve(__curdir, 'src')],
                exclude: /[\\/]node_modules[\\/]/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
            },
            {
                test: /\.css$/i,
                include: [
                    path.resolve(__curdir, 'src'),
                    path.resolve(__curdir, 'node_modules')
                ],
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.less$/i,
                use: [stylesHandler, 'css-loader', 'less-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.scss$/, // This matches .scss files
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(ico|eot|svg|ttf|woff|woff2|png|jpg|gif|bmp)$/i,
                include: [
                    path.resolve(__curdir, 'src'),
                    path.resolve(__curdir, 'public')
                ],
                exclude: /[\\/]node_modules[\\/]/,
                type: 'asset/resource',
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
};

module.exports = () =>
{
    if (isProduction)
    {
        config.mode = 'production';
        //config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else
    {
        config.mode = 'development';
    }
    console.log('mode > ', config.mode);
    return config;
};
