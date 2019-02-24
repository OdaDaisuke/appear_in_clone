import * as DotEnv from 'dotenv-webpack'
import * as webpack from 'webpack'
import * as path from 'path'
import * as BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const ROOT_DIR = __dirname
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public')
const STATIC_DIR = path.resolve(ROOT_DIR, 'statics')
const SRC_DIR = path.resolve(ROOT_DIR, 'src')
const OUT_DIR = path.resolve(PUBLIC_DIR, 'assets')
const IS_PRODUCTION = (process.env.NODE_ENV == "production")

function getEntries() {
    return [
        'react-hot-loader/patch',
        './index.tsx',
    ]
}

const plugins = {
    hotModule: new webpack.HotModuleReplacementPlugin(),
    dotEnv: new DotEnv({
        safe: true,
    }),
    browserSync: new BrowserSyncPlugin({
        host: 'localhost',
        port: 3131,
        server: {
            baseDir: [PUBLIC_DIR],
        },
        https: true,
        single: true,
    }),
    htmlWebpackPlugin: new HtmlWebpackPlugin({
        inject: false,
        filename: 'index.html',
        template: `${STATIC_DIR}/index.ejs`
    }),
    progressPlugin: new webpack.ProgressPlugin(function(percentage, msg) {
        console.log(parseInt(String(percentage * 100)) + '%', msg);
    }),
    definePlugin: new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    bundleAnalyzerPlugin: new BundleAnalyzerPlugin(),
}

const buildPlugins = {
    tsPlugins: () => {
        if(IS_PRODUCTION) {
            return [
                plugins.definePlugin,
                plugins.dotEnv,
            ]
        }
        return [
            plugins.hotModule,
            plugins.dotEnv,
            plugins.browserSync,
            plugins.bundleAnalyzerPlugin,
        ]
    },
    ejsPlugins: () => {
        if(IS_PRODUCTION) {
            return [plugins.htmlWebpackPlugin]
        }
        return [plugins.htmlWebpackPlugin, plugins.progressPlugin]
    }
}

const ejsVariables = {
    scriptRevision: () => {
        let revision = ""
        const d = new Date()
        revision += d.getFullYear()
        revision += d.getMonth() + 1
        revision += d.getDate()
        revision += `--${d.getHours()}--${d.getMinutes()}`
        return revision
    },
    isProduction: () => {
        return IS_PRODUCTION
    }
}

const config = [{
    context: SRC_DIR,
    devtool: 'source-map',
    entry: getEntries(),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
            }
        ],
    },
    output: {
        path: OUT_DIR,
        filename: `app.js`,
    },
    plugins: buildPlugins.tsPlugins(),
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
}, {
    context: ROOT_DIR,
    entry: {
        index: `${STATIC_DIR}/index.ejs`
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
        minimize: true,
    },
}];

export default config;