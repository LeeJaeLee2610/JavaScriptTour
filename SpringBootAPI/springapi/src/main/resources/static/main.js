var getApi =  "http://localhost:8080/rest/getStudents"
var postApi =  "http://localhost:8080/rest/addStudent"

function start(){
    getStudents(renderStudents)
    handleCreateForm();
}

start()

function getStudents(callback){
    fetch(getApi)
        .then(function(response){
            return response.json()
        })
        .then(callback)
}

function createStudent(data, callback){
    var options = {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(postApi, options)
        .then(function(response){
            response.json();
        })
        .then(callback)
}

function renderStudents(students){
    var listStudents = document.querySelector("#list-students")
    var htmls = students.map(function(student){
        return `<li>
            <p>name: ${student.name}</p>
            <p>age: ${student.age}</p>
            <p>point: ${student.point}</p>
        </li>`
    })
    listStudents.innerHTML = htmls.join("");
}

// document.querySelector("#create").addEventListener('click', () =>{
//     alert("Click ne")
// })

function handleCreateForm(){
    var createBtn = document.querySelector("#create");
    createBtn.addEventListener('click', () =>{
        var name = document.querySelector('input[name="name"]').value
        var age = document.querySelector('input[name="age"]').value
        var point = document.querySelector('input[name="point"]').value
        
        var formData = {
            name: name,
            age: age,
            point: point
        }

        createStudent(formData)
    })
}