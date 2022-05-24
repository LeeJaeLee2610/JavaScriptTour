var tab_container = document.querySelector(".tab-container")
var buttons = document.querySelectorAll(".title")
var contents = document.querySelectorAll(".content")

buttons.forEach((btn, index) =>{
    btn.addEventListener('click', () =>{
        removeClass(contents)
        contents[index].classList.add('active')
    })
})

function addClass(dom){
    dom.classList.add('active')
}

function removeClass(domList){
    domList.forEach(dom => dom.classList.remove('active'));
}