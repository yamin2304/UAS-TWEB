
// Temukan elemen tombol dengan ID "myButton" (ganti dengan ID tombol Anda)
const myButton = document.getElementById("myButton");

// Tambahkan event listener untuk klik pada tombol
myButton.addEventListener("click", function() {
  // Ubah warna latar belakang halaman menjadi biru
  document.body.style.backgroundColor = "blue";

  // Tampilkan pesan di console
  console.log("Background berubah!");
});