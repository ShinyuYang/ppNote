const fs= require ('fs')
const path = require('path')


const mockBaseURL = '//note-server.hunger-valley.com'
const realBaseURL = '//note-server.hunger-valley.com'

exports.config = function ({ isDev = true }={ isDev:true }){
  //默认初始值
  let  fileTxt=`
  module.exports={
    baseURL:'${isDev ? mockBaseURL : realBaseURL}'
  }
  `
  fs.writeFileSync(path.join(__dirname,'../src/helpers/config-baseURL.js'),fileTxt)
}
