var studentsAPI = "http://localhost:3000/students"

function start(){
    getStudents(renderStudents)
    postStudent()
}

start()

function getStudents(callback){
    fetch(studentsAPI)
        .then(function(response){
            return response.json()
        })
        .then(callback)
}

function postStudent(){
    document.querySelector('.create').addEventListener('click', () =>{
        var name = document.querySelector('input[name="name"]').value
        var gpa = parseFloat(document.querySelector('input[name="GPA"]').value)
        var formData = {
            name: name,
            GPA: gpa
        }

        addStudent(formData)
    })
}

function deleteStudent(){
}

function addStudent(data, callback){
    var options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(studentsAPI, options)
        .then(function(response){
            response.json()
        })
        .then(callback)
}

function renderStudents(students){
    var listS = document.querySelector('.list-students');
    var htmls = students.map(student => {
        return `
            <li>${student.name}</li>
            <li>${student.GPA}</li>
            <button class="delete-${student.id}">Delete</button>
        `
    })
    listS.innerHTML = htmls.join("")
}