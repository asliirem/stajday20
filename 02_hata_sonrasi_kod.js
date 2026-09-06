// =========================================================
// DÜZELTME SONRASI KOD (Yapılan Değişiklik)
// Staj Günü 20: Sipariş ekranı - adet doğrulama düzeltmesi
// =========================================================
//
// YAPILAN DEĞİŞİKLİK:
// - adet alanının sadece dolu olup olmadığı değil, aynı zamanda
//   0'dan büyük ve sayısal bir değer olup olmadığı da kontrol
//   edilmeye başlandı.
// - Fonksiyon ve değişken isimleri, kontrolün ne yaptığını daha
//   net anlatacak şekilde güncellendi (örn. "adetGecerliMi").
// - Hatalı durumlar için daha açıklayıcı mesajlar eklendi, böylece
//   log kayıtlarında ve kullanıcı ekranında sorunun kaynağı daha
//   kolay anlaşılabiliyor.
// =========================================================

function adetGecerliMi(adet) {
  // Sayı mı, pozitif mi ve tam sayı mı kontrolü tek yerde toplandı
  return typeof adet === "number" && Number.isInteger(adet) && adet > 0;
}

function siparisAlanlariniDogrula(urunId, adet) {
  // 1) urunId kontrolü
  if (!urunId) {
    return { gecerli: false, mesaj: "urunId alanı zorunludur." };
  }

  // 2) adet kontrolü - artık 0 ve negatif değerler reddediliyor
  if (!adetGecerliMi(adet)) {
    return {
      gecerli: false,
      mesaj: "adet alanı 0'dan büyük bir tam sayı olmalıdır."
    };
  }

  return { gecerli: true };
}

module.exports = { siparisAlanlariniDogrula, adetGecerliMi };

// =========================================================
// Kullanım örneği (sipariş servisi içerisinde):
//
// const { siparisAlanlariniDogrula } = require("./02_hata_sonrasi_kod");
//
// const sonuc = siparisAlanlariniDogrula(req.body.urunId, req.body.adet);
// if (!sonuc.gecerli) {
//   return res.status(400).json({ hata: true, mesaj: sonuc.mesaj });
// }
// =========================================================
