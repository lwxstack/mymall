import axios from 'axios'

export function request(config) {
  return new Promise((resolve, reject) => {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000',
    timeout: 5000
  })
  
  // 2.axios的拦截器
  instance.interceptors.request.use(config => {

  },err => {
    
  });
  instance.interceptors.response

  // 发送真正的网络请求
  return instance(config)
  })
}