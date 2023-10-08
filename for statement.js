for (var i = 1; i <= 7; i++) {
  console.log("Angka ke-" + i);

  // Situasi 1: Cetak pesan ketika i adalah angka genap
  if (i % 2 === 0) {
    console.log("Ini adalah angka genap");
  }

  // Situasi 2: Cetak pesan ketika i adalah angka ganjil
  if (i % 2 !== 0) {
    console.log("Ini adalah angka ganjil");
  }

  // Situasi 3: Cetak pesan ketika i adalah angka yang habis dibagi 3
  if (i % 3 === 0) {
    console.log("Ini adalah angka yang habis dibagi 3");
  }
}
