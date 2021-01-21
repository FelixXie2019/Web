
const {Router}=require('express');
const usersModel=require('../model/usersModel');
let router=new Router();


router.post('/login',(req,res)=>{
    let {email,password}=req.body;
    const emailReg=/^[a-zA-Z0-9]{4,20}@[a-zA-Z0-9]{2,10}\.com$/;
    const passwordReg=/^[a-zA-Z0-9.@!+]{6,20}$/;
    if(!emailReg.test(email)){
        res.send('邮箱格式不合法，用户名必须4-20位，主机名必须2-10位')
    }else if(!passwordReg.test(password)){
        res.send('密码格式不合法，必须6-20')
    }else {
        usersModel.findOne({email,password},(err,data)=>{
            if(err){
                console.log(err);
                res.send('您的网络有波动，请稍后再试');
                return
            }
            if(data){
                res.redirect('https://www.baidu.com')
                console.log(`email:${email}, password:${password} 登录`);
                return
            }
            res.send('用户名或者密码输入错误');
        })
    }

})
router.post('/register',(req,res)=>{
    let {email,nick_name,password,re_password}=req.body;
    const emailReg=/^[a-zA-Z0-9]{4,20}@[a-zA-Z0-9]{2,10}\.com$/;
    const nickNameReg=/[\u4e00-\u9fa5]/gm;
    const passwordReg=/^[a-zA-Z0-9.@!+]{6,20}$/;
    if(!emailReg.test(email)){
        res.send('邮箱格式不合法，用户名必须4-20位，主机名必须2-10位')
    }else if(!nickNameReg.test(nick_name)){
        res.send('昵称格式不合法，必须为中文')
    }else if(!passwordReg.test(password)){
        res.send('密码格式不合法，必须6-20')
    }else if( password !== re_password){
        res.send('两次输入密码不一致')
    }else {
        //去数据库中查询该邮箱是否注册过
        usersModel.findOne({email},(err,data)=>{
            if(data){
                res.send('邮箱已经注册,请更换邮箱')
            }else{
                usersModel.create({email,nick_name,password},(err,data)=>{
                    if(err){
                        console.log(err);
                        res.send('您的网络有波动，请稍后再试')
                    }else{
                        res.send('注册成功!!')
                        console.log(`email:${email}, nick_name:${nick_name}, password:${password} 注册`);
                    }
                })
            }
        })
    }
})

module.exports=function(){
    return router;
}