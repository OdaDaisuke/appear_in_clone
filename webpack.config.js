"use strict";
exports.__esModule = true;
var DotEnv = require("dotenv-webpack");
var webpack = require("webpack");
var path = require("path");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var ROOT_DIR = __dirname;
var PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');
var STATIC_DIR = path.resolve(ROOT_DIR, 'statics');
var SRC_DIR = path.resolve(ROOT_DIR, 'src');
var OUT_DIR = path.resolve(PUBLIC_DIR, 'assets');
var IS_PRODUCTION = (process.env.NODE_ENV == "production");
function getEntries() {
    return [
        'react-hot-loader/patch',
        './index.tsx',
    ];
}
var plugins = {
    hotModule: new webpack.HotModuleReplacementPlugin(),
    dotEnv: new DotEnv({
        safe: true
    }),
    browserSync: new BrowserSyncPlugin({
        host: 'localhost',
        port: 3131,
        server: {
            baseDir: [PUBLIC_DIR]
        },
        https: true,
        single: true
    }),
    htmlWebpackPlugin: new HtmlWebpackPlugin({
        inject: false,
        filename: 'index.html',
        template: STATIC_DIR + "/index.ejs"
    }),
    progressPlugin: new webpack.ProgressPlugin(function (percentage, msg) {
        console.log(parseInt(String(percentage * 100)) + '%', msg);
    }),
    definePlugin: new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    bundleAnalyzerPlugin: new BundleAnalyzerPlugin()
};
var buildPlugins = {
    tsPlugins: function () {
        if (IS_PRODUCTION) {
            return [
                plugins.definePlugin,
                plugins.dotEnv,
            ];
        }
        return [
            plugins.hotModule,
            plugins.dotEnv,
            plugins.browserSync,
            plugins.bundleAnalyzerPlugin,
        ];
    },
    ejsPlugins: function () {
        if (IS_PRODUCTION) {
            return [plugins.htmlWebpackPlugin];
        }
        return [plugins.htmlWebpackPlugin, plugins.progressPlugin];
    }
};
var ejsVariables = {
    scriptRevision: function () {
        var revision = "";
        var d = new Date();
        revision += d.getFullYear();
        revision += d.getMonth() + 1;
        revision += d.getDate();
        revision += "--" + d.getHours() + "--" + d.getMinutes();
        return revision;
    },
    isProduction: function () {
        return IS_PRODUCTION;
    }
};
var config = [{
        context: SRC_DIR,
        devtool: 'source-map',
        entry: getEntries(),
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader"
                }
            ]
        },
        output: {
            path: OUT_DIR,
            filename: "app.js"
        },
        plugins: buildPlugins.tsPlugins(),
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        }
    }, {
        context: ROOT_DIR,
        entry: {
            index: STATIC_DIR + "/index.ejs"
        },
        output: {
            path: PUBLIC_DIR,
            filename: 'index.html'
        },
        module: {
            rules: [
                {
                    test: /\.ejs$/,
                    loader: "ejs-html-loader",
                    options: {
                        data: {
                            SCRIPT_REVISION: ejsVariables.scriptRevision(),
                            IS_PRODUCTION: ejsVariables.isProduction()
                        }
                    }
                },
                {
                    test: /\.ejs$/,
                    loader: "html-loader"
                }
            ]
        },
        plugins: buildPlugins.ejsPlugins(),
        optimization: {
            minimize: true
        }
    }];
exports["default"] = config;
