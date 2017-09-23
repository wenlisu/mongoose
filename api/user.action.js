var user = require('./user.model');
var userAction = new Object();
userAction.login = function(req, res){
   let userName = req.body.name;
   let userpassword = req.body.password;
   user.findOne({ name:userName }, function(err, date){
    if(err){
        res.json({
            status: 500,
            des: '连接错误',
          });
    } else if (!date){
        res.json({
            status: 400,
            des: '用户名不存在',
          });
    } else{
        if (userpassword != date.password) { //查询到匹配用户名的信息，但相应的password属性不匹配
            res.json({
                status: 400,
                des: '密码错误',
              });
        } else { //信息匹配成功，则将此对象（匹配到的user) 赋给session.user  并返回成功
            res.json({
                status: 200,
                info: date,
              });
        }
    }
   });
}
userAction.register = function(req, res){
    let userName = req.body.name;
    let userpassword = req.body.password;
    user.findOne({ name:userName }, function(err, date){
     if(err){
         res.json({
             status: 500,
             des: '连接错误',
           });
     } else if (date){
         res.json({
             status: 400,
             des: '用户名已存在',
           });
     } else if(!date){
        var newUser = new user({
            name: userName,
            password: userpassword
        });
        newUser.save().then(function(err, date){
            res.json({
                status: 200,
                des: '保存成功',
              });
        });
     }
    });
 }
module.exports = userAction;
