const {Router}=require('express');
let router = new Router();
const {resolve}=require('path');

//ui路由
router.get('/login',(req,res)=>{
    let url=resolve(__dirname,'../public/login.html');
    res.sendFile(url);
})
//ui路由
router.get('/register',(req,res)=>{
    let url=resolve(__dirname,'../public/register.html');
    res.sendFile(url);
})

module.exports=function(){
    return router;
}