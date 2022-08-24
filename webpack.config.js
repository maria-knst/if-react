const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle[hash].js",
        chunkFilename: "[id].js",
        publicPath: "",
    },
    resolve: {
        extensions: ['.js', 'jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                          modules: {
                              localIdentName: '[name]__[local]__[hash:base64:5]',
                          },
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                              plugins: [
                                  [ autoprefixer, {} ],
                              ],
                          },
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(ttf|woff|woff2|eot)/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: 'public/index.html',
          filename: "index.html",
          inject: true,
      }),
    ],
}
