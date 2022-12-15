import axios from 'axios'
import {
  getBackendUrl,
  getToken
} from '@/plugins/helper.js'

const baseUrl = getBackendUrl()
export const service = axios.create({
  baseUrl,
  timeout: 1000 * 60,
  // transformRequest: [
  //   (data) => {
  //     if (Object.prototype.toString.call(data) === '[object Object]') {
  //       return JSON.stringify(data)
  //     }
  //     return data
  //   }
  // ],
  validateStatus: (status) => {
    // Resolve only if the status code is less than 500
    return status < 500
  }
})

service.interceptors.request.use(
  (config) => {
    if (config.headers) {
      // headers add token
      const token = getToken()
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    if (
      response.data.header.code === "000000" || //响应正常
      response.data.header.code === '-1' || //错误信息
      response.data.header.code === '-3' //token报错
    ) {
      return response
    }

    // FFFFFF为异常码
    // TODO: alert('response.data.message')
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
