// var listP = document.querySelector(".listP")

// var api = "http://localhost:8080/Products";

// function start(){
//     getProducts(function(products){
//         console.log(products)
//     })
// }

// start()

// function getProducts(callback){
//     fetch('http://localhost:8080/Products')
//     .then(function(response){
//         return response.json();
//     })
//     .then(callback);
// }
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(function(response){
//     return response.json();
// })
// .then(function(posts){
//     var htmls = posts.map(function(post){
//         return `
//             <li>
//                 <p>${post.title}</p>
//                 <p>${post.body}</p>
//             </li>
//         `;
//     });
//     var html = htmls.join('');
//     document.getElementById("list-courses").innerHTML = html
// })
// .catch(function(err){
//     alert("Loi r")
// })

// var json = {"name": "Duc Cuong", "age": 18}

// console.log(JSON.stringify(json))

// setTimeout(function(){
//     console.log(1)
// }, 1000)

// console.log(1)

// setTimeout(function(){
//     console.log(1);
//     setTimeout(function(){
//         console.log(1)
//         setTimeout(function(){
//             console.log(1)
//         }, 1000)
//     }, 1000)
// }, 1000)

// 1. new Promise
// 2. executor

// 1. Pedding
// 2. rufilled
// 3. rejected

var promise = new Promise(
    // executor(thanh cong, that bai)
    function(resovle, reject){
        // logic
        // Khi thanh cong se goi den resolve()
        // That bai: reject()
        resovle([
            {
                id: 1,
                name: "Duc Cuong"
            }
        ])
    }
)

// promise
//     .then(function(){
//         return 1;
//     })
//     .then(function(data){
//         console.log(data);
//         return 2;
//     })
//     .then(function(data){
//         console.log(data)
//         return 3;
//     })
//     .then(function(data){
//         console.log(data)
//         return 4;
//     })
//     .catch(function(){
//         console.log("fail")
//     })
//     .finally(function(){
//         console.log("finally")
//     })

// promise
//     .then(function(){
//         return new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve([1, 2, 3])
//             }, 3000)
//         });
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(){
//         console.log("fail")
//         })
//     .finally(function(){
//         console.log("finally")
//     })

function sleep(ms){
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function(){
        console.log(1)
        return new Promise((resolve) => {
            setTimeout(resolve, 1000)
        })
    })
    .then(function(){
        console.log(2)
        return new Promise((resolve) => {
            setTimeout(resolve, 1000)
        })
    })
    .then(function(){
        console.log(3)
        return new Promise((resolve) => {
            setTimeout(resolve, 1000)
        })
    })
    .finally(function(){
        console.log("finally")
    })