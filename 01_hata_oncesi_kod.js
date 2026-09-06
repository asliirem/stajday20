// =========================================================
// DÜZELTME ÖNCESİ KOD (Mevcut Hali)
// Staj Günü 20: Sipariş ekranı - adet doğrulama hatası
// =========================================================
//
// PROBLEM:
// Sipariş ekranında "adet" alanına 0 veya negatif bir değer
// girildiğinde sistem bunu geçerli kabul edip siparişi
// oluşturuyor. Bu durumda stok miktarı yanlışlıkla artıyor
// (negatif adet düşüldüğü için) ya da 0 adetlik anlamsız
// siparişler oluşabiliyor.
//
// Log kayıtları incelendiğinde, "Sipariş başarıyla oluşturuldu"
// mesajının adet: -3 gibi değerlerle de üretildiği görüldü.
// Sorunun kaynağının, sipariş oluşturma servisindeki alan
// kontrolünün sadece "boş mu" diye bakması, "geçerli bir
// pozitif sayı mı" diye bakmaması olduğu tespit edildi.
// =========================================================

function siparisAlanlariniDogrula(urunId, adet) {
  // Sadece boş olup olmadığı kontrol ediliyor.
  // adet = 0 veya adet = -5 gibi değerler bu kontrolden geçiyor!
  if (!urunId || adet === undefined || adet === null) {
    return { gecerli: false, mesaj: "urunId ve adet alanları zorunludur." };
  }

  return { gecerli: true };
}

module.exports = { siparisAlanlariniDogrula };
