var getApi =  "http://localhost:8080/rest/getStudents"

function start(){
    getStudents(renderStudents)
}

start()

function getStudents(callback){
    fetch(getApi)
        .then(function(response){
            return response.json()
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