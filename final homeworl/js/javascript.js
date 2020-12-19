//declear a myClick funtion 
function myClick(idstr,fun){
    var btn=document.querySelector(idstr)
    btn.onclick=fun;
}

//example01
var btn01=document.querySelector('#btn');
btn.addEventListener('click',function(){
    alert("hello!!!")
} )

//example02
var btn02=document.querySelector('#example02').addEventListener('mouseover', function(){
    var p=document.querySelector('.text');
    p.style.background='red';
})

//example03--getName
var getName=document.querySelector('#btn02');
getName.addEventListener('click',function(){
    alert(getName.className);
})


//add a new class name
myClick('#btn03',function(){
    var newName=document.querySelector('.newName').value;
    document.querySelector('#btn02').classList.add(newName);
    alert(getName.className);

})
//remove the class name
myClick('#btn04',function(){
    var removeName=document.querySelector('.removeName').value
    document.querySelector('#btn02').classList.remove(removeName);
    alert(getName.className);
})



