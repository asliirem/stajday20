# Staj Günü 20 - Sipariş Ekranında Hata Düzeltme

Bu klasör, staj kapsamında KodexB2B sipariş ekranında tespit edilen bir
hatanın incelenmesi ve düzeltilmesi çalışmasını içerir.

## Problem

Sipariş oluşturma servisinde `adet` alanı yalnızca "boş mu" diye kontrol
ediliyordu; 0 veya negatif bir değer girildiğinde sistem bunu geçerli
kabul edip siparişi oluşturabiliyordu. Bu durum stok miktarlarının
yanlış hesaplanmasına yol açabiliyordu.

## İçerik

- **01_hata_oncesi_kod.js** — Sorunun kaynağı olan, sadece boşluk kontrolü
  yapan mevcut (hatalı) doğrulama fonksiyonu.
- **02_hata_sonrasi_kod.js** — `adet` değerinin pozitif bir tam sayı olup
  olmadığını da kontrol eden, daha açıklayıcı mesajlar döndüren ve daha
  anlaşılır isimlendirilmiş düzeltilmiş fonksiyon.
- **03_test_senaryolari.js** — Düzeltme öncesi ve sonrası davranışı aynı
  senaryolar üzerinden karşılaştıran basit test script'i.

## Yapılan Değişiklik

- `adet` alanı için tek yerde toplanmış bir `adetGecerliMi()` kontrolü
  eklendi (sayısal, tam sayı ve 0'dan büyük olma şartı).
- Hatalı durumlar için daha açıklayıcı mesajlar eklendi.
- Fonksiyon ve değişken isimleri, kontrolün amacını daha net yansıtacak
  şekilde güncellendi.
- Mevcut doğru çalışan senaryolar (geçerli sipariş, eksik `urunId`)
  etkilenmedi; sadece hatalı kabul edilen durumlar düzeltildi.

## Nasıl Test Edilir

```bash
node 03_test_senaryolari.js
```

Script, aynı test senaryolarını hem düzeltme öncesi hem de düzeltme
sonrası fonksiyonlarla çalıştırıp sonuçları karşılaştırmalı olarak
konsola yazdırır.
