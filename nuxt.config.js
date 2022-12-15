export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ktzq_web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    {src: './asstes/css/index.css'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // 是否开启跨域代理配置 根据项目酌情选择
    '@nuxtjs/proxy'
  ],
  axios: {
		// 开启允许跨域 根据项目酌情选择
    	proxy: true,
      credentials: true
  	},
    // 跨域配置 此处配置需酌情改变
	proxy: {
    '/api/': {
      target: 'https://h5api.zhefengle.cn',//这个网站是开源的可以请求到数据的
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true
        }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
