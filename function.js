function NilaiPangkat(angka, pangkat) {
  var hasilPangkat = Math.pow(angka, pangkat);
  
  // Situasi lain: Menggandakan hasil pangkat
  var hasilGanda = hasilPangkat * 2;
  
  return { pangkat: hasilPangkat, ganda: hasilGanda };
}

var angka = 3;
var pangkat = 2;
var hasil = NilaiPangkat(angka, pangkat);

console.log(angka + " pangkat " + pangkat + " adalah: " + hasil.pangkat);
console.log("Hasil ganda dari pangkat adalah: " + hasil.ganda);
