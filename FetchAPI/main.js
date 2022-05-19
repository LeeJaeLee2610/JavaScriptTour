var listP = document.querySelector(".listP")

var api = "http://localhost:8080/Products";

function start(){
    getProducts(function(products){
        console.log(products)
    })
}

start()

function getProducts(callback){
    fetch('http://localhost:8080/Products')
    .then(function(response){
        return response.json();
    })
    .then(callback);
}
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