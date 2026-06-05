# Laura — Inglés para Profesionales

Landing page de conversión directa (One-Page) optimizada para la reserva de clases de inglés individuales para perfiles profesionales y universitarios. Desarrollada con arquitectura limpia en HTML5, CSS3 nativo y JavaScript Vanilla.

## 🚀 Características Principales

- **Diseño Premium Minimalista:** Estética basada en contraste "Cream & Accent" orientada a un público ejecutivo.
- **Configuración Centralizada (Estilo .env):** Control total de textos clave, precios, número de WhatsApp y paleta de colores desde un único archivo `config.js`, sin necesidad de editar el HTML.
- **SEO Completo:** Meta tags primarios, Open Graph (WhatsApp/LinkedIn/Facebook), Twitter Card, Schema.org JSON-LD con credenciales estructuradas, sitemap y robots.txt.
- **Carrusel Infinito Nativo:** Slider de testimonios generado dinámicamente desde `config.js`, optimizado para Mobile/Desktop con clonación de nodos.
- **Scroll Reveal & Counters:** Animaciones fluidas basadas en `IntersectionObserver` de alto rendimiento.
- **Favicons Multi-formato:** SVG (Chrome/Edge), PNG 32×32 y 16×16 (Firefox), Apple Touch Icon 180×180 (iOS/Safari).

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica avanzada con `<main>`, `<article>`, `<ol>` para steps, roles ARIA, `aria-labelledby` por sección y atributos de accesibilidad completos.
- **CSS3:** Custom Properties (Variables CSS) para temas, Flexbox, transiciones aceleradas por hardware (`will-change`).
- **JavaScript (Vanilla):** Lógica nativa sin dependencias. Inyección dinámica de textos, testimonials y links de WhatsApp desde `config.js`.

---

## 📂 Estructura del Proyecto

```text
├── index.html              # Estructura principal de la landing
├── styles.css              # Estilos globales, variables :root y layout responsive
├── script.js               # Carrusel, animaciones e inyección dinámica en el DOM
├── config.js               # Configuración global de textos, colores y contacto
├── sitemap.xml             # Sitemap para crawlers (raíz del proyecto)
├── robots.txt              # Directivas para crawlers + referencia al sitemap
└── assets/
    ├── Lau.webp            # Foto principal (hero + mobile)
    ├── og-image.webp       # Imagen Open Graph 1200×630 (WhatsApp, LinkedIn, etc.)
    ├── favicon.svg         # Favicon vectorial (Chrome, Edge)
    ├── favicon-32.png      # Favicon PNG 32×32 (Firefox y otros)
    ├── favicon-16.png      # Favicon PNG 16×16
    └── favicon-180.png     # Apple Touch Icon (iOS, Safari)
```

---

## 💡 Comportamiento de la Inyección Dinámica

Todos los textos relevantes de la página se inyectan desde `config.js` vía `id` en el HTML. Editá `config.js` para modificar cualquier contenido sin tocar el HTML.

- **Textos:** Nav, hero, badges, proof strip, secciones, pasos, testimonials, CTA final y footer se leen desde `CONTENT`.
- **Testimonials:** Las cards se generan completamente desde el array `testimonialsList` — agregar o quitar testimonios es tan simple como editar el array.
- **Colores:** Las propiedades de `COLORS` se convierten automáticamente a variables CSS en el `:root`. Por ejemplo, `accentLight: "#f0d9d4"` se inyecta como `--accent-light: #f0d9d4`.
- **WhatsApp:** Todo elemento con la clase `.wa-dynamic-link` adopta el número de `WHATSAPP_NUMBER` con texto precodificado.
- **Precio:** Referenciado como `{precio}` en `ctaGuaranteePattern`, reemplazado automáticamente por `PRECIO_POR_HORA`.

---

## 🔍 SEO

| Elemento | Estado |
|---|---|
| Title + meta description | ✅ |
| Open Graph completo | ✅ |
| Twitter Card | ✅ |
| Schema.org JSON-LD (Person + Offer + Credentials) | ✅ |
| Canonical URL | ✅ |
| sitemap.xml | ✅ |
| robots.txt | ✅ |
| Imágenes con width/height explícitos | ✅ |
| Preload imagen hero | ✅ |
| Semántica HTML (main, article, ol, h3) | ✅ |
| ARIA labels por sección | ✅ |

---

## 📱 Compatibilidad y Rendimiento

- **Responsive:** Soporte completo desde 320px (mobile) hasta ultra-wide desktop.
- **Performance:** Preconnect a Google Fonts, `fetchpriority="high"` en imagen hero, animaciones aceleradas por hardware, zero dependencias externas de JS.
- **Favicons:** Cobertura completa entre navegadores — SVG para navegadores modernos, PNG como fallback, Apple Touch Icon para iOS.

---

## 📄 Licencia y Créditos

Desarrollado de forma privada para Laura — Profesora de Inglés. Año 2026.