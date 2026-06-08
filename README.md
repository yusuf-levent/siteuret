# siteuret

Next.js App Router ile hazırlanmış statik export web sitesi.

## Sayfalar

- `/` - siteüret ajans tanıtım sayfası
- `/sablon/salon/` - yeniden kullanılabilir güzellik salonu şablonu

Salon demo içeriği kökteki `config/salon.ts` dosyasından yönetilir.

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
