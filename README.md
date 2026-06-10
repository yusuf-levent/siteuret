# siteuret

Next.js App Router ile hazırlanmış statik export web sitesi.

## Sayfalar

- `/` - berber ve güzellik salonlarına özel siteüret tanıtım sayfası
- `/sablon/salon/` - yeniden kullanılabilir demo güzellik salonu şablonu

Salon demo içeriği kökteki `config/salon.ts` dosyasından yönetilir.
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
