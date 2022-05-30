var postAPI = "https://jsonplaceholder.typicode.com/todos/"

fetch(postAPI)
    .then(function(response){
        return response.json()
    })
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
                <h2>${post.id}</h2>
                <h2>${post.title}</h2>
            </li>`
        })
        var html = htmls.join("")
        document.querySelector("#post-block").innerHTML = html
    })
    .catch(function(err){
        console.log(err)
    })