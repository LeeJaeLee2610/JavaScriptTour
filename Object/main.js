// Khai báo object
var myInfo = {
    name: 'Duc Cuong',
    age: 18,
    address: 'Ha Noi',
    getName: function(){
        return this.name
    }
}

var name;
var age;
var address;

// object constructor
function User(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address
    
    this.getData = function(){
        return `${this.name} ${this.address}`
    }
}

// delete myInfo.address

// console.log(myInfo['address'])

var user = new User("Duc Cuong", 19, 'Dong Anh')
user.title = "Hoc o PTIT"

console.log(user)
console.log(user.getData())

// prototype giúp thêm vào thuộc tính

console.log(User.prototype.className = 'Nhu Nao')
var firstName
var lastName

function Student(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

Student.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'

// Đối tượng date
var date = new Date()
console.log(date)

function getNextYear(nextYear){
    return parseInt(new Date().getFullYear()) + 1
}

/*
Math Object

Math.PI
Math.round()
Math.ceil
*/

var a = [1, 2, 3, 4]

function getRandomItem(a){
    var i = Math.floor(Math.random() * a.length)
    var res = a[i]
    return res
}

console.log(getRandomItem(a))