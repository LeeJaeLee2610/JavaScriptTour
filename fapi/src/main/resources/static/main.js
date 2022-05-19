var getAPI = "http://localhost:8080/Products";
var postAPI = "http://localhost:8080/Products/insert";

function start(){
    getProducts(renderProducts)
    insertProduct()
}

start()

function getProducts(callback){
    fetch(getAPI)
    .then(function(response){
        return response.json();
    })
    .then(callback);
}

function insertProduct(){
    fetch(postAPI, {
        method: 'POST',
        body: JSON.stringify({
            pName: 'Macbook Pro',
            description: 'Them duoc di ma'
        }),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

function renderProducts(products){
    var listP = document.querySelector(".listP")
    var htmls = products.map(function(product){
        return `
            <li>
                <h4>${product.pName}</h4>
                <h4>${product.description}</h4>
            </li>
        `;
    })
    listP.innerHTML = htmls.join('')
}
