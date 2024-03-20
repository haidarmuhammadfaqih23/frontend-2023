//membuat array names
const names = ['Michael', 'Hannah', 'Jonas']

/**
 * menjalankan
 * method forEach
 */
names.forEach(function (name){
    console.log(`Nama: ${name}`)
})

/**
 * Menjalankan method map
 * Method map untuk transform/mengubah data
 */

const formattedName = names.map
(function (name){
    return `Mr/Mrs. ${name}`
})

console.log(formattedName)