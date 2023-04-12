//if else
let angka = 10;

if (angka > 0) {
  console.log("Angka positif");
} else if (angka < 0) {
  console.log("Angka negatif");
} else {
  console.log("Angka nol");
}

//switcase
let hari = 1;

switch (hari) {
  case 1:
    console.log("Hari Minggu");
    break;
  case 2:
    console.log("Hari Senin");
    break;
  case 3:
    console.log("Hari Selasa");
    break;
  case 4:
    console.log("Hari Rabu");
    break;
  case 5:
    console.log("Hari Kamis");
    break;
  case 6:
    console.log("Hari Jumat");
    break;
  case 7:
    console.log("Hari Sabtu");
    break;
  default:
    console.log("Input tidak valid");
    break;
}
