const users = [
    {
        name: "Jonas",
        age: 15
    },
    {
        name: "Michael",
        age: 48
    },
    {
        name: "Hannah",
        age: 34
    }
]


const filterUser = users.filter
(function (user){
    return user.age > 21
})

console.log(filterUser)