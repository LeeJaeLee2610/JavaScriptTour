numbers = [1, 3, 3, 5]

Array.prototype.myForEach = function(callback){
    var out = []
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                out.push(this[index])
            }
        }
    }
    return out
}

console.log(numbers.myForEach(function(number, index, array){
    return index
}))

Array.prototype.myMap = function(callback){
    var out = []
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                out.push(this[index])
            }
        }
    }
    return out
}

console.log(numbers.myMap(function(number, index, array){
    return index%2 == 0
}))

Array.prototype.myFilter = function(callback){
    var out = []
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
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

console.log(numbers.mySome(function(number, index, array){
    return array.length%2 != 0
}))

Array.prototype.myEvery = function(callback){
    var ok = 1
    for(var index in this){
        if(this.hasOwnProperty(index)){
           if(callback(this[index], index, this)){
               ok = 1
           }
        }
    }
    if(ok){
        return true
    }
    return false
}

console.log(numbers.mySome(function(number, index, array){
    return number%2 == 0
}))