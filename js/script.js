function hitungLuas() {
  var sisiLuas = document.getElementById("sisi-luas").value;

  console.log(sisiLuas);
  document.getElementById("output-luas").innerHTML = `<span>${sisiLuas}</span>`;
}
function hitungKeliling() {
  var kelilingPersegi = document.getElementById("keliling-persegi").value;

  console.log(kelilingPersegi);
  document.getElementById(
    "output_keliling"
  ).innerHTML = `<span>${kelilingPersegi}</span>`;
}
