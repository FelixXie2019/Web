function myClick(idstr,fun){
    var btn=document.querySelector(idstr)
    btn.onclick=fun;
}
//html example
myClick('#btn01',function(){
var newP=document.createElement('p');   
var newText =document.querySelector('.html-example').value;
newP.textContent=newText;
var example=document.querySelector('#example01');
example.appendChild(newP);
})

//css example
//change the background color
myClick('#btn02',function(){
    var newColor=document.querySelector('.css-example').value;
    document.querySelector('.css-intro').style.background=newColor;
   
})
//change the font size
myClick('#btn03',function(){
    var newSize=document.querySelector('#newSize').value+"px";
    document.querySelector('.css-intro ul').style.fontSize=newSize;
})