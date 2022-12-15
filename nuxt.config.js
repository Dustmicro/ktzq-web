export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '开拓足球',
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
    '@/plugins/element-ui',
    '~/plugins/axios'
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
  ],
 
axios: {
  timeout: 30000,//超时时间
  baseurl: 'http://116.63.133.52:8080',//baseurl
  prefix: '/api',//配置请求接口前缀
  proxy: true,// 开启代理
},
proxy: {
	"/api": {
		// 配置接口地址
		target: "http://116.63.133.52:8080",//baseurl
		pathRewrite: {
			"^/api/":"/"
		},
		changeOrigin: true
	}
},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
