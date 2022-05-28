/*
html dom co 3 thanh phan
element
attribute: hreft
text: "Hello"
innerText: Chỉ hiện những gì thấy
textContent: Hiện hết tất cả kể cả dính display none
innerHTML: Những thẻ tag thì sẽ tự động chuyển 

preventDefault(): ngăn chặn hoạt động
stopProgapation(): tạm ngừng
*/

var h1Demo = document.querySelector(".h1_demo")

console.log(h1Demo.getAttribute("class"))

document.querySelector(".heading").innerHTML = "OK"

console.log(document.querySelector(".heading").innerHTML)

// var boxEle = document.querySelector('.box')
// console.log([boxEle])

var boxEle = document.querySelector(".box")

Object.assign(boxEle.style, {
    width: '200px',
    height: '200px',
    backgroundColor: 'pink',
})

var aEle = document.links

for(var i = 0; i < aEle.length; i++){
    aEle[i].onclick = function(e){
        if(!e.target.href.startsWith('https://f8.edu.vn')){
            e.preventDefault();
        }
    }
}

var ulEle = document.querySelector('ul')

ulEle.onmousedown = function(e){
    e.preventDefault()
}

ulEle.onclick = function(e){
    console.log(e.target)
}