const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// all config settings

module.exports = {
    mode: 'development', //production
    entry: {
        main: path.resolve(__dirname, 'src/app.js')
        //start of project 
        //where to get the files

    },
    output: {
        //where to put the files
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js', //contenthash creates a unique id for each build (good for versioning)
        assetModuleFilename: '[name][ext]',
        clean: true, //cleans dist folder every build and only keeps most recent 
    },

    devtool: 'inline-source-map', //lets browser know where things came from (good for errors)
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5001, //default 8888,
        open: true,
        hot: true,
    },

    //loaders
    // will turn non js flies into modules and copy them to app.js then to dist folder

    module: {
        rules: [
            //css
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //the order of the loaders matter (read from right to left)
            //css-loader looks for flie and converts to module and sends to style loader
            //style loader takes the import and injects it into js file

            //images
            { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },

            //js for babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },


    //plugins 
    //does what loaders cant do 

    plugins: [new HtmlWebpackPlugin({
        title: 'just a Demo',
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/temp.html')

    })
    ]
}