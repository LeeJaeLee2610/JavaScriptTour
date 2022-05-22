function sum(a){
    var s = a.toString()
    var res = 0;
    for(var i = 0; i < s.length; i++){
        res += parseInt(s[i])
    }
    return res
}

function check(a){
    if(a[a.length - 1] == '0' || a[a.length - 1] == '5'){
        return true
    }
    return false
}

function run(a) {
    if(sum(a)%3 == 0 && check(a.toString())){
        return 3
    }
    if(sum(a)%3 == 0){
        return 1
    }
    if(check(a.toString())){
        return 2
    }
}


// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3