module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: "/"
    },
    devServer: {
        client: {
            progress: true,
        },
        static: {
            publicPath: './dist'
        },
        open: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
};