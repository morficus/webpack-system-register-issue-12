const WebpackSystemRegister = require('webpack-system-register'),
    HtmlPlugin              = require('html-webpack-plugin');


module.exports = {
    entry: {
        main: './src/main.js'
    },

    output: {
        path: 'dist',
        filename: 'main.bundle.js'
    },

    plugins: [
        new HtmlPlugin({
            filename: 'index.bundle.html',
            template: './src/index.html',
            inject: false,
            showErrors: true
        }),

        new WebpackSystemRegister({})
    ]
};