var listC = document.querySelector("#list-courses")

var api = "http://127.0.0.1:5500/FetchAPI/demo.html"

function start(){
    getCourses(function(courses){
        console.log(courses)
    })
}

start()

function getCourses(callback){
    fetch(api).then(function(response){
        return response.json();
    })
    .then(callback)
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