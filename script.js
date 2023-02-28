let dizel = 20.48,
  benzin = 20.62,
  LPG = 12.07;
const altSatır = "\r\n";

const yakıtMetni =
  "1.DİZEL" +
  altSatır +
  "2.BENZİN" +
  altSatır +
  "3.LPG" +
  altSatır +
  "Yakıt Tipini Seçiniz.";

let yakıtTipi = prompt(yakıtMetni);
if (yakıtTipi == "1" || yakıtTipi == "2" || yakıtTipi == "3") {
  let yakıtLitre = Number(prompt("Kaç Litre Yakıt Alacaksınız?"));
  let bakiye = Number(prompt("Lütfen Bakiyenizi Giriniz."));
  if (yakıtTipi == "1") {
    //Dizel
    let ödenecekTutar = dizel * yakıtLitre;
    let kalanBakiye = bakiye - ödenecekTutar;
    let eksikTutar = bakiye - ödenecekTutar;
    if (ödenecekTutar < bakiye) {
      alert(
        "İŞLEM BAŞARILI " +
          altSatır +
          "Bakiye: " +
          bakiye +
          altSatır +
          "Tutar: " +
          ödenecekTutar +
          altSatır +
          "Kalan Bakiye: " +
          kalanBakiye
      );
    } else {
      alert(
        "BAKİYE YETERSİZ " +
          altSatır +
          "Bakiye:" +
          bakiye +
          altSatır +
          "Eksik Tutar: " +
          eksikTutar +
          altSatır +
          "Ödenecek Tutar: " +
          ödenecekTutar
      );
    }
  } else if (yakıtTipi == "2") {
    //BENZİN
    let ödenecekTutar = benzin * yakıtLitre;
    let kalanBakiye = bakiye - ödenecekTutar;
    let eksikTutar = bakiye - ödenecekTutar;
    if (ödenecekTutar < bakiye) {
      alert(
        "İŞLEM BAŞARILI " +
          altSatır +
          "Bakiye: " +
          bakiye +
          altSatır +
          "Tutar: " +
          ödenecekTutar +
          altSatır +
          "Kalan Bakiye: " +
          kalanBakiye
      );
    } else {
      alert(
        "BAKİYE YETERSİZ " +
          altSatır +
          "Bakiye:" +
          bakiye +
          altSatır +
          "Eksik Tutar: " +
          eksikTutar +
          altSatır +
          "Ödenecek Tutar: " +
          ödenecekTutar
      );
    }
  } else if (yakıtTipi == "3") {
    //LPG
    let ödenecekTutar = LPG * yakıtLitre;
    let kalanBakiye = bakiye - ödenecekTutar;
    let eksikTutar = bakiye - ödenecekTutar;
    if (ödenecekTutar < bakiye) {
      alert(
        "İŞLEM BAŞARILI " +
          altSatır +
          "Bakiye: " +
          bakiye +
          altSatır +
          "Tutar: " +
          ödenecekTutar +
          altSatır +
          "Kalan Bakiye: " +
          kalanBakiye
      );
    } else {
      alert(
        "BAKİYE YETERSİZ " +
          altSatır +
          "Bakiye:" +
          bakiye +
          altSatır +
          "Eksik Tutar: " +
          eksikTutar +
          altSatır +
          "Ödenecek Tutar: " +
          ödenecekTutar
      );
    }
  }
} else {
  alert("Lütfen Yakıt Tipini Seçiniz.");
}
