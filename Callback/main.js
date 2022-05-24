/*
- Là hàm được truyền qua đối số
- khi gọi hàm khác

*/

function myFun(param){
    param(123)
}

function myCallback(value){
    console.log(value)
}

myFun(myCallback)

// Array.prototype.map2 = function(callback){
//     for(var i = 0; i < this.length; i++){
//         callback(this[i], i)
//     }
// }

Array.prototype.forEach2 = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this)
        }
    }
}

var courses = [
    'js',
    'html',
    'css'
]

courses.forEach2(function(course, index, array){
    console.log(course, index, array)
})

// courses.map2(function(course, index){
//     console.log(index, course)
// })

// Array.prototype.filter2 = function(callback){
//     for(var i = 0; i < this.length; i++){
//         if(this[i].coin > 700){
//             callback(this[i], i, this)
//         }
//     }
// }

Array.prototype.every2 = function(callback){
    var check = true
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var res = callback(this[index], index, this)
            if(!res){
                check = false
                break
            }
        }
    }
    return check
}

var courses1 = [
    {
        name: "JS",
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: "CSS",
        coin: 980
    }
]

var res = courses1.every2(function(course, index, array){
    return course.coin > 600
})

// var filterCourses = courses1.filter(function(course, index, array){
//     return course.coin > 700
// })

// console.log(filterCourses)

// courses1.filter2(function(course, index, array){
//     console.log(index, course, array)
// })
// console.log(courses1.some(function(course){
//     return course.coin < 500
// }))