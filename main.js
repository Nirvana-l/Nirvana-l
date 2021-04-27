/* 
    主模块： 负责调用子模块 实现功能
*/
// 引入子模块
var say = require('./say');
var show = require('./show');
var login = require('./login')

// console.log(say); // { sayHi: fn, sayHello: fn }
// console.log(show);
// console.log(login)

// 调用子模块方法
say.sayHi();
say.sayHello();

show.showOne();
show.showTwo();

login.login();