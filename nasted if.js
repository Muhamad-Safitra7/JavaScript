var presentaseKehadiranKaryawan = 90;
var penilaianKerja = 85;  // Penilaian kinerja

if (presentaseKehadiranKaryawan >= 80) {
  console.log("Kehadiran Karyawan Memadai.");

  if (penilaianKerja >= 90) {
    console.log("Evaluasi Kinerja: Sangat Baik");
  } else {
    if (penilaianKerja >= 75) {
      console.log("Evaluasi Kinerja: Cukup Baik");
    } else {
      console.log("Evaluasi Kinerja: Perlu Peningkatan");
    }
  }

} else {
  console.log("Kehadiran Karyawan kurang.");
}
