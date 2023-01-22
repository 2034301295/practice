let myButton = document.querySelector("button");
function setUserName() {
  let myName = prompt("请输入你的名字");
  localStorage.setItem("name", myName);
  if (myName === "fufu" || myName === "holiofox") {
    alert("YES,约约 love " + myName);
  } else {
    alert("NO,约约 does not love " + myName);
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  alert("你好，欢迎来到fufu的小窝！");
}
myButton.onclick = function () {
  setUserName();
};
