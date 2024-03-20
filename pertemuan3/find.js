//membuaat array object

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

const foundUser = users.find
(function (user){
    return user.age > 21
})

console.log(foundUser)