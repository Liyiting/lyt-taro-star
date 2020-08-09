/*
 * @Author: your name
 * @Date: 2020-08-08 18:57:22
 * @LastEditTime: 2020-08-09 12:00:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /lyt-taro-stars/config/dev.js
 */
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        // 小程序端样式引用本地资源内联配置
        url: {
          enable: true,
          config: {
            limit: 10240 // 文件大小限制
          }
        }
      }
    }
  },
  h5: {
    esnextModules: ['taro-ui']
  }
}
