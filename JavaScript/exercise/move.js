function move(obj,target,speed){
    var timer;

    //关闭上一个定时器
    clearInterval(timer);


    timer=setInterval(()=>{
        var oldValue=parseInt(getComputedStyle(obj,null).left);
        //在旧值的基础上增加
        var newValue=oldValue+speed;
        obj.style.left=newValue+"px";

        if(newValue==target){
            clearInterval(timer);
        }
    },30)
}