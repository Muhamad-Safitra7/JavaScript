var day = 3;
var activity;

switch (day) {
  case 0:
    activity = "Istirahat di rumah";
    break;
  case 1:
    activity = "Bekerja di kantor";
    break;
  case 2:
    activity = "Belajar di sekolah";
    break;
  case 3:
    activity = "Rapat di kantor";
    break;
  case 4:
    activity = "Berkumpul dengan teman-teman";
    break;
  case 5:
    activity = "Menjalani ibadah Jum'at";
    break;
  case 6:
    activity = "Berlibur bersama keluarga";
    break;
  default:
    activity = "Aktivitas tidak valid";
}

console.log("Hari ini Anda akan: " + activity);
