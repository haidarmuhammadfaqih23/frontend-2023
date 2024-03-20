const req = {
    body: {
        name: 'Rakha',
        age: 21,
        major: 'Informatics'
    }
}

// const name = req.body.name
// const age = req.body.age
// const major = req.body.major

const {name, age, major} = req.body

console.log(name, age, major)