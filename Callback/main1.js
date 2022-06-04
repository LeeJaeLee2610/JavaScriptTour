const numbers = [1, 2, 3, 4]
const numbers1 = [1, 3, 3, 5]

Array.prototype.myMap = function(cb) {
    var out = []
    for(var i = 0; i < this.length; i++){
        out.push(cb(this[i], i))
    }
    return out
}

console.log(numbers.myMap(function(number){
    return number*2
}))

Array.prototype.myFilter = function(callback){
    var out = []
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var res = callback(this[index], index, this)
            if(res){
                out.push(this[index])
            }
        }
    }
    return out
}

Array.prototype.mySome = function(callback){
    var out = false
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                out = true
                break
            }
        }
    }
    return out
}

Array.prototype.myEvery = function(callback){
    var x
    for(var index in this){
        if(this.hasOwnProperty(index)){
            x = callback(this[index], index, this)
        }
    }
    if(x){
        return true
    }
    return false
}

console.log(numbers.myFilter(function(number, index, array){
    return number%2 == 0
}))

console.log(numbers1.mySome(function(number, index, array){
    return number%2 == 0
}))

console.log(numbers1.myEvery(function(number, index, array){
    return number%2 !== 0
}))