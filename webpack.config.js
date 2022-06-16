/* eslint-disable indent */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        gameboard: './src/gameboard.js',
        player: './src/player.js',
        ship: './src/ship.js',
        game: './src/game.js',
        dom: './src/dom.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    output: {
        filename: 'main.js',
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        //clean: true,
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {            
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};