var users = [
    {
        id: 1,
        name: "Duc Cuong"
    },
    {
        id: 2,
        name: "Duc Bui"
    },
    {
        id: 3,
        name: "Hung Dinh"
    }
]

var cmts = [
    {
        id: 1,
        user_id: 2,
        content: "Em Cuong professional"
    },
    {
        id: 2,
        user_id: 1,
        content: "Vua xuat ra ben trong e oi"
    },
    {
        id: 3,
        user_id: 2,
        content: "OK bạn ơi"
    }
]

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(cmts)
        }, 1000)
    })
}

function getUserByIds(userIds){
    return new Promise(function(resolve){
        var res = users.filter(function(user){
            return userIds.includes(user.id)
        })
        setTimeout(function(){
            resolve(res)
        }, 1000)
    })
}

getComments()
    .then(function(cmts){
        var userIds = cmts.map(function(cmt){
            return cmt.user_id
        })
        return getUserByIds(userIds)
            .then(function(users){
                return {
                    users: users,
                    cmts: cmts,
                }
            })
    })
    .then(function(data){
        console.log(data)
    })

// Lấy ra user_id cmts để từ đó lấy được thông tin người cmt
// function getUsersByIds(userIds){
//     return new Promise(function(resolve){
//         var res = users.filter(function(user){
//             return userIds.includes(user.id)
//         })
//         setTimeout(function(){
//             resolve(res)
//         }, 1000)
//     })
// }

// Lấy ra cmt sau 1s
// function getComments(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(cmts)
//         }, 1000)
//     })
// }

// func này là 1 promise vì vậy sẽ sử dụng để lấy thông tin -> r từ đó in ra
// getComments()
//     .then(function(cmts){
//         var userIds = cmts.map(function(cmt){
//             return cmt.user_id
//         })
//         return getUsersByIds(userIds)
//             .then(function(users){
//                 return {
//                     users: users,
//                     cmts: cmts,
//                 }
//             })
//     })
//     .then(function(data){
//         // console.log(data)
//         var cmt_block = document.querySelector("#cmt-block")
//         var html = ""
//         data.cmts.forEach(function(cmt){
//             var user = data.users.find(function(user){
//                 return user.id === cmt.user_id
//             })
//             html += `<li>${user.name}: ${cmt.content}</li>`
//         })
//         cmt_block.innerHTML = html
//     })