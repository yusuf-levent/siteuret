# siteuret

Next.js App Router ile hazırlanmış statik export web sitesi.

## Sayfalar

- `/` - berber ve güzellik salonlarına özel siteüret tanıtım sayfası
- `/sablon/klasik-berber/` - vintage klasik berber demo şablonu
- `/sablon/premium-barber-studio/` - premium erkek bakım stüdyosu demo şablonu
- `/sablon/urban-fade/` - genç ve enerjik urban barber demo şablonu
- `/sablon/soft-beauty-studio/` - pastel güzellik salonu demo şablonu
- `/sablon/luxury-beauty-lounge/` - lüks güzellik lounge demo şablonu
- `/sablon/clean-beauty-clinic/` - temiz klinik/cilt bakım demo şablonu
- `/sablon/salon/` - eski bağlantılar için soft beauty şablonuna uyumlu rota

Şablon demo içerikleri `src/config/templates.ts` dosyasından yönetilir.
Gerçek marka, telefon, yorum veya adres bilgisi kullanılmaz; yayına alınacak
işletme için bu alanlar ayrıca düzenlenir.

## Güvenlik

`public/_headers` dosyası Cloudflare Workers Static Assets ve Pages tarafında
güvenlik başlıklarını uygular. Build sonrasında bu dosya `out/_headers` olarak
çıktıya dahil edilir.

## Komutlar

```bash
npm install
npm run dev
npm run build
```

`npm run build` çıktıyı `out/` klasörüne üretir.

Cloudflare Pages panelinde:

- Build komutu: `npm run build`
- Build çıktı klasörü: `out`
