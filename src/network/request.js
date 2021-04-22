import axios from 'axios'
export function request (config, success, failure) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  instance.interceptors.request.use(aaa => {
    console.log(aaa)
  }, error => {
    console.log(error)
  })
  instance(config)
    .then(res => {
      // console.log(res)
      success(res)
    })
    .catch(err => {
      // console.log(err)
      failure(err)
    })
}
