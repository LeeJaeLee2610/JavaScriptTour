/*
html dom co 3 thanh phan
element
attribute: hreft
text: "Hello"
innerText: Chỉ hiện những gì thấy
textContent: Hiện hết tất cả kể cả dính display none
innerHTML: Những thẻ tag thì sẽ tự động chuyển 
*/

var h1Demo = document.querySelector(".h1_demo")

console.log(h1Demo.getAttribute("class"))

document.querySelector(".heading").innerHTML = "OK"

console.log(document.querySelector(".heading").innerHTML)

var boxEle = document.querySelector('.box')
console.log([boxEle])