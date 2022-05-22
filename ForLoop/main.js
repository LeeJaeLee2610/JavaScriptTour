/*
for
for/in: Lặp key
for/of: Lặp giá trị
while: Lặp khi điều kiện đúng
do/while
*/

// function run(object){
//     var a = []
//     for(var i in object){
//         a.push(`Thuộc tính ${i} có giá trị ${object[i]}`)
//     }
//     return a
// }

// console.log(run({ name: 'Nguyen Van A', age: 16 }));

var myInfo = {
    name: "Duc Cuong",
    age: 18
}

for(var value of Object.keys(myInfo)){
    console.log(value)
}