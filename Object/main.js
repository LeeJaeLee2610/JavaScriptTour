var myInfo = {
    name: 'Duc Cuong',
    age: 18,
    address: 'Ha Noi',
    getName: function(){
        return this.name
    }
}

delete myInfo.address

console.log(myInfo['address'])