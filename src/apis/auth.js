//业务接口

import request from '../helpers/request';

const URL={
  REGISTER:'/auth/register',
  LOGIN:'/auth/login',
  LOGOUT:'/auth/logout',
  GET_INFO:'/auth'
}
export default {
  register({username,password}){
    return request(URL.REGISTER,'POST',{username,password})
  },
  login({username,password}){
    return request(URL.LOGIN,'POST',{username,password})
  },
  logout(){
    return request(URL.LOGOUT)
  },
  getInfo(){
    return request(URL.GET_INFO)
  }
  //return的是一个promise对象因此后面可以直接接then
}
