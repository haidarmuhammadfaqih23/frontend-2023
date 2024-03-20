// rest parameter

// function sum(a, b, c, d, e){
//     const hasil = a + b + c + d + e
//     return hasil
// }
// console.log(sum(1, 2, 3, 4, 5))

// function sum(... numbers){
//     let hasil = 0
    
//     for (const number of numbers) {
//         hasil += number
//     }
//     return hasil
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8))

/**membuat fungsi showFamilies
menampilkan anggota keluarga
parameter ketiga rest parameter*/

function showFamilies(suami, istri, ...anak2) {
    console.log(`Suami: ${suami}`)
    console.log(`Istri: ${istri}`)

    for (const anak of anak2){
        console.log(`Anak: ${anak}`)
    }

}

showFamilies('Michael','Hannah','Jonas','Martha','Magnuz')

//ketinggaalaan