var langs = [
    'Js',
    'PHP',
    'C++'
]

console.log(langs.toString())
console.log(langs.join(' and '))
console.log(langs.shift())
/*
push
pop
shift
unshift: Thêm phần tử vào đầu 
splicing: 
concat
slicing
*/

/*
forEach
every
some
find
*/

var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 250,
    },
    {
        id: 2,
        name: "html",
        coin: 10,
    },
    {
        id: 3,
        name: 'css',
        coin: 0,
    }
]


// Tất cả và trả về boolean
courses.forEach(function(course, index){
    console.log(index, course)
})

// Tất cả thỏa mãn và trả về boolean
var isFree = courses.every(function(course, index){
    return course.coin === 0
})

// Chỉ cần thỏa mãn 1 hoặc 1 vài
var isFree1 = courses.some(function(course, index){
    return course.coin === 0
})

// chả về 1 cái thôi
var isFree2 = courses.find(function(course, index){
    return course.coin === 0
})

// Thỏa mãn thì nó liệt kê thôi
var isFree3 = courses.filter(function(course, index){
    return course.name === 'Ruby'
})

// console.log(isFree)

// Trong map thực thi 1 vòng lặp
// Nếu hàm ý return về cái gì thì cái map sẽ trả về cái cc ý
// course: chả về object, index là key stt trong object, originArray tra ve object
function courseHandler(course, index, originArray){
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray
    }
}

var newCourses = courses.map(courseHandler);

console.log(newCourses)

// reduce
// var i = 0
// function coinHandler1(accumulator, currentValue, currentIndex, originArray){
//     i++;
//     var total =  accumulator + currentValue.coin
//     console.log({
//         'Lượt chạy: ': i,
//         'Biến tích trữ: ': accumulator,
//         'Giá khóa học: ': currentValue.coin,
//         'Tích trữ được: ': total
//     })
//     return total
// }

// var totalCoin = courses.reduce((a, b) =>
//     a + b.coin, 0
// )

var totalCoin1 = courses.reduce(function(total, course){
    return total + course.coin;
}, 0)

var names = courses.reduce(function(name, course){
    return `${name} ${course.name}`
}, "")
console.log(names)
console.log(totalCoin1)

// function va bien luu trux
// var totalCoin = courses.reduce(coinHandler1, 0)
// console.log(totalCoin)

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
//Tham số đầu tiên là giá trị trả về, tiếp theo là giá trị trong mảng hoặc object
var flatArray = depthArray.reduce(function(flatOut, depthItem){
    return flatOut.concat(depthItem)
}, [])

console.log(flatArray)

var topics = [
    {
        topic: "FE",
        courses: [
            {
                id: 1,
                title: "html, css"
            },
            {
                id: 2,
                title: "js"
            }
        ]
    },
    {
        topic: "BE", 
        courses: [
            {
                id: 3,
                title: "java"
            },
            {
                id: 4,
                title: "Nhu nao"
            }
        ]
    }
]

var newCourses1 = topics.reduce(function(course, topic){
    return courses.concat(topic.courses)
}, [])

console.log(newCourses1)

var htmls = newCourses.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `
})

console.log(htmls)
console.log(htmls.join(''))

Array.prototype.reduce2 = function(callback, res){
    // Khởi tạo giá trị i = 0
    var i = 0
    // cái mảngg đối số này nhỏ hơn 2 thì sẽ gán giá trị res = this[0]
    if(arguments.length < 2){
        i = 1
        res = this[0]
        console.log(res)
    }
    for(; i < this.length; i++){
        res = callback(res, this[i], i, this)
    }
    return res
}

const numbers = [8, 9, 10, 4, 5]

const res = numbers.reduce2((total, number) =>{
    return total + number
})

console.log(res)