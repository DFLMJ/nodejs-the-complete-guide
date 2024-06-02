/*
 * @Author: MaJun
 * Dont't Settle
 * @Date: 2024-06-02 19:33:02
 * @LastEditTime: 2024-06-02 22:54:47
 * @LastEditors: MaJun
 * @Description: I wrote this.
 * @FilePath: \nodejs-the-complete-guide\node-fist-app\第一节\fist-app.js
 */
const fs = require('fs')
fs.writeFileSync('hello.txt','您好，未来的领航者')
console.log('你好 领航者')