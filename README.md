# siteuret

Next.js App Router ile hazırlanmış statik export web sitesi.

## Sayfalar

- `/` - berber ve güzellik salonlarına özel siteüret tanıtım ve şablon seçme sayfası
- `/sablon/aura-classic-barber/` - vintage klasik berber şablonu
- `/sablon/black-tie-grooming/` - premium/editorial grooming stüdyosu şablonu
- `/sablon/ink-fade-lab/` - tattoo, piercing ve fade odaklı genç berber şablonu
- `/sablon/green-comb-studio/` - eco/bohem doğal bakım berber şablonu
- `/sablon/blush-room-beauty/` - soft pastel güzellik salonu şablonu
- `/sablon/velvet-glow-lounge/` - luxury beauty lounge şablonu
- `/sablon/pure-skin-minimal/` - clinical/minimal cilt bakım şablonu
- `/sablon/chrome-nail-bar/` - Y2K/Gen-Z nail ve beauty bar şablonu
- `/sablon/salon/` - eski bağlantılar için pastel beauty uyumlu rota

## Şablon Ayarları

Her şablon ayrı klasörde tutulur:

```text
src/templates/{slug}/business.json
```

`business.json` içinde marka adı, telefon, WhatsApp, adres, çalışma saatleri,
hizmetler, fiyatlar, süreler, ekip, yorumlar ve galeri alanları değiştirilebilir.

Demo içerikler hayali marka ve müşteri yorumları kullanır. Galeri alanları gerçek
marka veya kişiye ait fotoğraf kullanmadan CSS tabanlı telifsiz mockup olarak
render edilir.

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
