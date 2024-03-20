const bod = 1997;
const year = 2024;

const age = year - bod;

console.log(age);

/**
 *
 * function umur
 */
const tahun = 2024;
function hitungUmur(bd) {
  const age = tahun - bd;

  return age;
}

const umurJoko = hitungUmur(2010);
const umurAufa = hitungUmur(1997);

console.log(umurJoko, umurJoko * 2);

let currentYear = 2024;
function umurKamu(tahunLahir, tahun) {
  return tahun - tahunLahir;
}

console.log("Masukkan tahun lahir: ");
process.stdin.on("data", function (tahunLahirInput) {
  let tahunLahir = parseInt(tahunLahirInput);
  console.log("umur anda: ", umurKamu(tahunLahir, tahun));
  process.exit();
});
