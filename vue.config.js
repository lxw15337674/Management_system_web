const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    lintOnSave: true,
    chainWebpack: config => {
        config.resolve.alias
            .set("@$", resolve("src"))
            .set("image", resolve("src/assets/image"))

    },
    devServer: {
        // historyApiFallback: true,
        // proxy: {
        //     '/api': {
        //         target: 'http://www.baidu.com/',
        //         pathRewrite: {'^/api' : ''},
        //         changeOrigin: true,     // target是域名的话，需要这个参数，
        //         secure: false,          // 设置支持https协议的代理
        //     },
        // },
        // noInfo: true
    }
};
