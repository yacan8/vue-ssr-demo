const nodeExternals = require("webpack-node-externals");
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = {
    css: {
        // 不提取 CSS
        extract: false
    },
    outputDir: 'serverDist',
    configureWebpack: () => ({
        // 服务器入口文件
        entry: `./src/server-entry.js`,
        devtool: 'source-map',
        // 构建目标为nodejs环境
        target: 'node',
        output: {
            // 构建目标加载模式 commonjs
            libraryTarget: 'commonjs2'
        },
        // 跳过 node_mdoules，运行时会自动加载，不需要编译
        externals: nodeExternals({
            // 允许css文件，方便css module
            allowlist: [/\.css$/]
        }),
        // 关闭代码切割
        optimization: {
            splitChunks: false
        },
        plugins: [
            new VueSSRServerPlugin()
        ]
    })
};