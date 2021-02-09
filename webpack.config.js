const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: ["./resources/js/app.js", "./resources/scss/app.scss"],
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "app.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "css/app.css",
                        },
                    },
                    {
                        loader: "extract-loader",
                    },
                    {
                        loader: "css-loader?-url",
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },

    plugins: [new VueLoaderPlugin()],
};
