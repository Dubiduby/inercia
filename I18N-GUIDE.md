# Guía de Internacionalización (i18n)

## Resumen

El sitio web de Inercia ahora está configurado para funcionar en **Español (idioma principal)** e **Inglés**.

### Estructura de URLs

- **Español (por defecto)**: `/` → `https://inercia.com/`
- **Inglés**: `/en/` → `https://inercia.com/en/`

El español NO lleva prefijo en la URL porque es el idioma principal del sitio.

---

## Qué se ha implementado

### 1. Sistema de Traducciones

**Ubicación**: `src/i18n/`

```
src/i18n/
├── locales/
│   ├── es.json    # Traducciones en español
│   └── en.json    # Traducciones en inglés
└── utils.ts       # Funciones de utilidad
```

**Qué contienen los archivos JSON:**
- Textos de la interfaz (UI) que no cambian frecuentemente
- Navegación, botones, footer, labels
- Mensajes del sistema

**Ejemplo**:
```json
{
  "nav": {
    "home": "Inicio",
    "services": "Servicios",
    "contact": "Contacto"
  }
}
```

### 2. Páginas en ambos idiomas

- `src/pages/index.astro` → Página principal en español
- `src/pages/en/index.astro` → Página principal en inglés

Ambas páginas usan los mismos componentes, solo cambia el parámetro `lang`.

### 3. Selector de idioma

En el **Navbar** (esquina superior derecha):
- Desktop: Botón pequeño "EN" o "ES"
- Mobile: Botón en el menú desplegable

Cambiar de idioma navega a la versión correspondiente de la página.

### 4. Componentes actualizados

Todos estos componentes ahora aceptan un parámetro `lang`:
- `BaseLayout.astro`
- `Navbar.astro`
- `Footer.astro`
- `Hero.astro`
- `About.astro`
- `Services.astro`
- `Gallery.astro`
- `Logos.astro`
- `Contact.astro`

### 5. SEO optimizado

**hreflang tags** en `<head>`:
```html
<link rel="alternate" hreflang="es" href="https://inercia.com/" />
<link rel="alternate" hreflang="en" href="https://inercia.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://inercia.com/" />
```

Esto le dice a Google qué versión mostrar según el idioma del usuario.

**Open Graph locale**:
- Español: `og:locale="es_ES"`
- Inglés: `og:locale="en_US"`

### 6. Decap CMS configurado para i18n

El CMS ahora permite editar contenido en ambos idiomas:
- Hero (español/inglés)
- About (español/inglés)
- Services (español/inglés)

---

## Cómo usar el sistema

### Para cambiar textos de UI (navegación, botones, etc.)

1. Edita los archivos JSON:
   - `src/i18n/locales/es.json` → Para español
   - `src/i18n/locales/en.json` → Para inglés

2. Usa la función `t()` en los componentes:
   ```astro
   ---
   import { useTranslations } from '../i18n/utils';
   const t = useTranslations(lang);
   ---
   <button>{t('hero.cta')}</button>
   ```

### Para agregar contenido (cuando tengas fotos, textos, etc.)

**Opción 1: Via CMS (Recomendado)**

1. Accede a `/admin/`
2. Ve a la sección que quieres editar (Hero, About, Services)
3. Cambia el idioma en el selector (arriba a la derecha)
4. Edita el contenido
5. Guarda

**Opción 2: Manualmente en archivos**

Crea carpetas por idioma:
```
src/data/
├── hero/
│   ├── es.json
│   └── en.json
├── about/
│   ├── es.json
│   └── en.json
└── services/
    ├── es/
    │   └── service-1.json
    └── en/
        └── service-1.json
```

### Para añadir una nueva página

1. Crea la versión en español: `src/pages/nueva-pagina.astro`
2. Crea la versión en inglés: `src/pages/en/new-page.astro`
3. Pasa el parámetro `lang` a todos los componentes:
   ```astro
   <BaseLayout lang="es">
     <Hero lang="es" />
   </BaseLayout>
   ```

---

## Flujo de trabajo recomendado

### Ahora (sin contenido final):
✅ Ya está todo listo técnicamente
✅ Todos los componentes traducidos
✅ Sistema funcionando

### Cuando tengas el contenido:

1. **Añade contenido en ESPAÑOL primero**
   - Usa el CMS en `/admin/`
   - Sube fotos reales
   - Escribe textos definitivos

2. **Traduce al INGLÉS**
   - En el CMS, cambia el idioma a "English"
   - Traduce los mismos textos
   - Las fotos se compartirán automáticamente

3. **Prueba ambas versiones**
   - Visita `/` (español)
   - Visita `/en/` (inglés)
   - Usa el selector de idioma

---

## Cómo funciona internamente

### Función `useTranslations()`

```typescript
const t = useTranslations('es');
t('nav.home') // → "Inicio"
t('nav.services') // → "Servicios"
```

Lee del archivo JSON correspondiente al idioma.

### Función `getLangFromUrl()`

```typescript
getLangFromUrl(url) // → 'es' o 'en'
```

Detecta el idioma actual basándose en la URL.

### Función `translatePath()`

```typescript
translatePath('/servicios', 'en') // → '/en/services'
translatePath('/services', 'es') // → '/servicios'
```

Convierte rutas entre idiomas.

---

## Preguntas frecuentes

### ¿Puedo cambiar el idioma por defecto a inglés?

Sí, edita `src/i18n/utils.ts`:
```typescript
export const defaultLang = 'en'; // Cambiar de 'es' a 'en'
```

Y actualiza `astro.config.mjs`:
```javascript
i18n: {
  defaultLocale: 'en',
  // ...
}
```

### ¿Cómo añado otro idioma (ej: francés)?

1. Crea `src/i18n/locales/fr.json`
2. Añade traducciones
3. Actualiza `astro.config.mjs`:
   ```javascript
   locales: ['es', 'en', 'fr']
   ```
4. Crea `src/pages/fr/index.astro`

### ¿Los textos largos (about, services) van en JSON?

No. Los textos largos/dinámicos van en:
- Archivos de datos (`src/data/`)
- O editados vía CMS

Los JSON solo tienen textos de UI (botones, labels, navegación).

### ¿El CMS gestiona traducciones automáticamente?

No. Debes editar el contenido manualmente en cada idioma:
1. Selecciona idioma en el CMS
2. Edita contenido
3. Repite para el otro idioma

Las traducciones NO son automáticas.

### ¿Qué pasa si olvido traducir algo?

El sitio seguirá funcionando. El texto aparecerá en el idioma que esté disponible o mostrará la clave (ej: `nav.home` si falta la traducción).

---

## Checklist antes de lanzar

### Contenido
- [ ] Todo el contenido en español añadido
- [ ] Todo el contenido traducido al inglés
- [ ] Fotos subidas y optimizadas
- [ ] Videos subidos y optimizados

### Traducciones
- [ ] Todos los textos de UI verificados en ambos idiomas
- [ ] Links de navegación funcionan en ambos idiomas
- [ ] Selector de idioma funciona correctamente

### SEO
- [ ] Títulos y descripciones en ambos idiomas
- [ ] hreflang tags configurados correctamente
- [ ] Sitemap incluye ambos idiomas
- [ ] Open Graph tags en ambos idiomas

### Pruebas
- [ ] Navegar por `/` (español) funciona
- [ ] Navegar por `/en/` (inglés) funciona
- [ ] Selector de idioma cambia correctamente
- [ ] Todo el contenido visible en ambos idiomas
- [ ] Mobile responsive en ambos idiomas

---

## Recursos útiles

- [Documentación Astro i18n](https://docs.astro.build/en/guides/internationalization/)
- [Decap CMS i18n](https://decapcms.org/docs/i18n/)
- [Google hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions)

---

## Estructura final del proyecto (i18n)

```
src/
├── i18n/
│   ├── locales/
│   │   ├── es.json          # Traducciones UI español
│   │   └── en.json          # Traducciones UI inglés
│   └── utils.ts             # Funciones i18n
│
├── pages/
│   ├── index.astro          # Español (/)
│   └── en/
│       └── index.astro      # Inglés (/en/)
│
├── data/                    # Contenido dinámico
│   ├── hero/
│   │   ├── es.json
│   │   └── en.json
│   ├── about/
│   │   ├── es.json
│   │   └── en.json
│   └── services/
│       ├── es/
│       └── en/
│
└── components/
    ├── layout/
    │   ├── Navbar.astro     # Con selector de idioma
    │   └── Footer.astro     # Traducido
    └── sections/
        ├── Hero.astro       # Acepta prop lang
        ├── About.astro      # Acepta prop lang
        └── ...              # Todos traducidos
```

---

**¡Sistema i18n completamente implementado y listo para usar!** 🌐

Cuando tengas tu contenido final, simplemente añádelo en español, tradúcelo al inglés, y todo funcionará automáticamente.
