//底层发起请求
import axios from 'axios'
import baseURLConfig from './config-baseURL'
import {Message} from 'element-ui'


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = baseURLConfig.baseURL
//baseURL用于在不同环境下地址需要改变而设置,实际上是连着下面的第一个参数url
axios.defaults.withCredentials = true
//是否使用跨域请求

export default function request(url,type='GET',data={}){
  //type不传参数默认是GET
  return new Promise((resolve,reject) =>{
    let option={
      url,
      method:type,
      validateStatus(status){
        return(status>=200 && status< 300)|| status===400
      }
    }
    if(type.toLowerCase()==='get'){
      option.params=data
    }else{
      option.data=data
    }
    axios(option).then(res=>{
      if(res.status===200){
        resolve(res.data)
      }else{
        Message.error(res.data.msg)
        reject(res.data)
      }
      }).catch(err=>{
        Message.error('网络异常')
        reject({msg:'网络异常'})
    })
  })
}
