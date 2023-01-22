let myButton=document.querySelector('button')
let myHeading=document.querySelector('h1')
function setUserName(){
    let myName=prompt('请输入你的名字');
    localStorage.setItem('name',myName);
    if(myName==='fufu'){
    myHeading.textContent='yes,约约 love '+myName;}
    else{myHeading.textContent='NO,约约 does not love '+myName}
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent='你好呀，'+storedName;
}
myButton.onclick=function(){
    setUserName();
}