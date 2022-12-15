// 请您自行根据需求进行更改。

// 可以引入一个提示信息的消息组件(根据自己的UI框架选择)
// import { notification } from 'ant-design-vue'

// $axios: 实例
// redirect: 如果需要跳转页面(比如登录页), 
// 可以从 nuxt 中拿到 redirect 函数即可, 跳转: redirect('/user/login')
export default function ({ $axios, redirect }) {

<<<<<<< HEAD
	$axios.defaults.timeout = 10000;
    $axios.defaults.baseURL = 'http://localhost:7001';
=======
    $axios.defaults.timeout = 10000;
    $axios.defaults.baseURL = 'http://116.63.133.52:8080';
>>>>>>> 363f4be3c646d6b13ef9a6a1d8f9bef9e331507a
    
    // 在请求之前做一些事情
    $axios.onRequest(config => {

        // config: 请求前的东西啥都有(自己打印看一下)
        console.log("config:",config)

        // 例如: 在请求头中添加token
        const token = ''
        if(token) {
            config.headers['token'] = token
            console.log("添加token的config:",config)
        }
        
        // return
        return config
    })    


    // 获取数据后做一些事情
    $axios.onResponse(response => {

        // response: 请求数据也在里面(啥都有)
        console.log("response",response)
        
        // 例如: 判断一下状态码是否正常
        switch(response.data.code) {
            case 200 :
                console.log('ok') 
            break;
            case 408 :
                console.log('返回错误') 
            break;
            default:
                console.log('未知错误') 
            break;
        }

        // return
        return response
    })  


    // 请求失败(服务器报错),做一些事情
    $axios.onError(error => {

        // error: 错误详细信息(啥都有)
        console.log(error.response.config)

        // 获取状态码
        const code = parseInt(error.response && error.response.status)

        // 如果服务器状态码不等于200(意味着接口废了)
        if(code != 200){
            console.log('服务器报错了...')
            // 例如: 直接跳到错误页
            // redirect('/404')
         }
    })
}
