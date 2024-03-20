import {index, store } 
from './controller.mjs'

const main = () => {
    index()

    const user = { name: 'Martha',
    age: 28 }
    store(user)

    index()
}

main()