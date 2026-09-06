// =========================================================
// Test Senaryoları
// Staj Günü 20: Düzeltme öncesi ve sonrası davranış karşılaştırması
// =========================================================

const oncesi = require("./01_hata_oncesi_kod");
const sonrasi = require("./02_hata_sonrasi_kod");

const senaryolar = [
  { urunId: 101, adet: 3,    aciklama: "Geçerli sipariş (pozitif tam sayı)" },
  { urunId: 101, adet: 0,    aciklama: "Adet 0 olan sipariş" },
  { urunId: 101, adet: -5,   aciklama: "Negatif adet ile sipariş" },
  { urunId: 101, adet: 2.5,  aciklama: "Ondalıklı adet ile sipariş" },
  { urunId: null, adet: 3,   aciklama: "urunId eksik olan sipariş" }
];

console.log("=== DÜZELTME ÖNCESİ DAVRANIŞ ===");
senaryolar.forEach(s => {
  const sonuc = oncesi.siparisAlanlariniDogrula(s.urunId, s.adet);
  console.log(`${s.aciklama} -> ${JSON.stringify(sonuc)}`);
});

console.log("\n=== DÜZELTME SONRASI DAVRANIŞ ===");
senaryolar.forEach(s => {
  const sonuc = sonrasi.siparisAlanlariniDogrula(s.urunId, s.adet);
  console.log(`${s.aciklama} -> ${JSON.stringify(sonuc)}`);
});

// =========================================================
// Beklenen fark:
//
// "Adet 0 olan sipariş", "Negatif adet ile sipariş" ve
// "Ondalıklı adet ile sipariş" senaryoları:
//   - Düzeltme ÖNCESİ: gecerli: true (HATALI DAVRANIŞ)
//   - Düzeltme SONRASI: gecerli: false (DOĞRU DAVRANIŞ)
//
// Diğer senaryolarda (geçerli sipariş, eksik urunId) davranış
// aynı kalmalı; yani mevcut doğru çalışan akış bozulmamalı.
// =========================================================
