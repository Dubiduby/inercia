# Inercia Music Group - Landing Page Guide

## Project Overview

This is a high-performance, SEO-optimized landing page for Inercia Music Group built with:
- **Astro** - Static site generator for excellent SEO and performance
- **Tailwind CSS v3** - Utility-first CSS framework (stable version)
- **Decap CMS** - Git-based content management system

The site is designed for a music group specializing in weddings, corporate events, and private parties.

> **Note:** The project uses Tailwind CSS v3 for maximum stability and compatibility. All standard Tailwind classes are available out of the box.

---

## Project Structure

```
/Users/Tracy/Desktop/Inercia web final/
├── astro.config.mjs              # Astro configuration with Tailwind & Sitemap
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
├── .gitignore                    # Git ignore rules
│
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro      # Main layout wrapper with SEO components
│   │
│   ├── components/
│   │   ├── seo/
│   │   │   ├── BaseHead.astro           # SEO meta tags (Open Graph, Twitter Card)
│   │   │   └── StructuredData.astro     # Schema.org JSON-LD for rich results
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.astro             # Sticky navigation with mobile menu
│   │   │   └── Footer.astro             # Site footer
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.astro             # Reusable button component
│   │   │   └── Accordion.astro          # Interactive accordion for services
│   │   │
│   │   └── sections/
│   │       ├── Hero.astro               # Hero with video background
│   │       ├── About.astro              # About section
│   │       ├── Services.astro           # Services with 3 accordions
│   │       ├── Gallery.astro            # Responsive image grid
│   │       ├── Logos.astro              # Client/venue logos showcase
│   │       └── Contact.astro            # Contact with mailto + WhatsApp
│   │
│   ├── pages/
│   │   └── index.astro                  # Main landing page
│   │
│   ├── styles/
│   │   └── global.css                   # Tailwind imports + custom styles
│   │
│   ├── data/                            # CMS-managed JSON files
│   │   ├── site.json                    # Site settings (email, WhatsApp, social)
│   │   ├── hero.json                    # Hero section content
│   │   ├── about.json                   # About section content
│   │   ├── services/                    # Service items (CMS can add more)
│   │   ├── gallery/                     # Gallery images (CMS managed)
│   │   └── logos/                       # Client logos (CMS managed)
│   │
│   └── content/
│       ├── config.ts                    # Content Collections schema
│       └── workshops/                   # Future workshops content
│
└── public/
    ├── admin/
    │   ├── index.html                   # Decap CMS admin interface
    │   └── config.yml                   # CMS configuration
    │
    ├── images/
    │   ├── gallery/                     # Gallery images
    │   └── logos/                       # Logo images
    │
    ├── videos/
    │   └── hero-video.mp4               # 15-second hero video (<3MB)
    │
    ├── robots.txt                       # SEO crawler directives
    └── favicon.svg                      # Site favicon
```

---

## Key Features Implemented

### 🎯 SEO Excellence (Priority #1)

**Meta Tags & Social:**
- Title tags (50-60 characters)
- Meta descriptions (150-160 characters)
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URLs

**Structured Data (Schema.org JSON-LD):**
- MusicGroup schema with contact info
- Service schemas (3 types: weddings, corporate, private)
- LocalBusiness schema for local SEO
- All schemas ready for rich search results

**Performance Optimizations:**
- Static site generation (SSG)
- Image lazy loading
- Video optimization guidelines
- Semantic HTML structure
- Mobile-first responsive design
- Automatic sitemap generation

### 🎨 Components Built

**Navigation:**
- Sticky navbar with smooth scroll
- Mobile hamburger menu
- Accessible with ARIA labels

**Hero Section:**
- Full-screen video background
- Text overlay with CTA button
- Scroll indicator
- Respects user motion preferences
- Video pauses when not in viewport

**About Section:**
- Clean typography
- Markdown content support

**Services Section:**
- 3 interactive accordions
- Smooth animations
- First accordion open by default

**Gallery:**
- Responsive grid (2 → 3 → 4 columns)
- Hover effects with captions
- Lazy loading optimization
- Alt text for accessibility

**Logos:**
- Client/venue logo showcase
- Grayscale → color on hover
- Responsive grid layout

**Contact:**
- Email (mailto link)
- WhatsApp direct message link
- Beautiful gradient background
- Clear call-to-action

### 📝 Decap CMS Integration

**Admin Panel:** Access at `/admin/`

**Editable Content:**
- Site settings (email, WhatsApp, social media)
- Hero section (title, subtitle, video URL, CTA)
- About section (markdown content)
- Services (create, edit, delete services)
- Gallery (upload images with alt text)
- Client logos (upload and manage)

**Features:**
- Image upload widget
- Markdown editor
- Git-based version control
- Local development mode
- Preview before publishing

### 🚀 Future-Proofing

**Content Collections:**
- Schema configured for workshops
- Type-safe content management
- Ready for additional pages

**Scalability:**
- File-based routing ready
- Component architecture for reuse
- Prepared for expansion

---

## How to Run the Project

### Development Server

```bash
# Start Astro dev server
npm run dev

# Access the site
# Visit: http://localhost:4321
```

### Access Decap CMS (Local Development)

```bash
# Terminal 1: Start Astro dev server
npm run dev

# Terminal 2: Start Decap CMS local backend
npx decap-server

# Access CMS
# Visit: http://localhost:4321/admin/
```

### Build for Production

```bash
# Build static site
npm run build

# Preview production build
npm run preview
```

### Other Commands

```bash
# Format code with Prettier
npm run format

# Check TypeScript types
npm run astro check
```

---

## Next Steps Before Launch

### 1. Add Your Content

#### Hero Video
- [ ] Create/optimize your 15-second hero video
- [ ] Compress to **under 3MB** (use H.264 codec)
- [ ] Resolution: 1920x1080, 30fps
- [ ] Place at: `public/videos/hero-video.mp4`
- [ ] Create poster image (WebP format): `public/images/hero-poster.jpg`

#### Gallery Images
- [ ] Add 6-12 high-quality event photos
- [ ] Compress images (80-85% quality)
- [ ] Recommended size: Max 1200px width
- [ ] Place in: `public/images/gallery/`
- [ ] Use descriptive filenames (e.g., `wedding-ceremony-2024.jpg`)

#### Client/Venue Logos
- [ ] Collect client/venue logos
- [ ] Prefer SVG format (scalable)
- [ ] If PNG/JPG, use transparent backgrounds
- [ ] Place in: `public/images/logos/`

#### Favicon
- [ ] Create favicon (SVG or PNG)
- [ ] Replace: `public/favicon.svg`

#### Open Graph Image
- [ ] Create social share image (1200x630px)
- [ ] Place at: `public/og-image.jpg`

### 2. Update Contact Information

Edit these files with your actual information:

**Site Settings:** [src/data/site.json](src/data/site.json)
```json
{
  "email": "info@inercia.com",        // ← Update with real email
  "whatsapp": "1234567890",            // ← Update with real number (no + or spaces)
  "social": {
    "facebook": "",                     // ← Add if available
    "instagram": ""                     // ← Add if available
  }
}
```

**Contact Section:** [src/components/sections/Contact.astro](src/components/sections/Contact.astro)
- Update email address (line 9)
- Update WhatsApp number (line 10)

**Footer:** [src/components/layout/Footer.astro](src/components/layout/Footer.astro)
- Uncomment social media links if needed (lines 68-86)

### 3. Update SEO & Structured Data

**Schema.org Data:** [src/components/seo/StructuredData.astro](src/components/seo/StructuredData.astro)

Update these fields:
- [ ] **Location/Address** (lines 20-24, 97-100)
  - City, State, Country
- [ ] **Phone Number** (line 27, 105)
  - Format: +1-234-567-890
- [ ] **Email** (line 29)
- [ ] **Social Media URLs** (lines 18-21)
  - Add Facebook, Instagram links
- [ ] **Service Area** (lines 50, 69, 88)
  - Define your geographic service area
- [ ] **Opening Hours** (lines 108-114)
  - Update business hours if applicable
- [ ] **Price Range** (line 106)
  - Update (e.g., "$$", "$$$")

### 4. Configure Domain

**Astro Config:** [astro.config.mjs](astro.config.mjs)
```javascript
export default defineConfig({
  site: 'https://inercia.com',  // ← Update with your actual domain
  // ...
});
```

**Robots.txt:** [public/robots.txt](public/robots.txt)
```
Sitemap: https://inercia.com/sitemap-index.xml  // ← Update domain
```

### 5. Content Customization

Edit via CMS or directly in files:

**Hero Section:** [src/data/hero.json](src/data/hero.json)
- Update title, subtitle, CTA text

**About Section:** [src/data/about.json](src/data/about.json)
- Write your unique story and value proposition

**Services:** Create files in [src/data/services/](src/data/services/)
- Or use CMS at `/admin/` to add services

### 6. Deploy to Netlify (Recommended)

**Step 1: Push to GitHub**
```bash
git add .
git commit -m "Initial Inercia landing page"
git push origin main
```

**Step 2: Deploy on Netlify**
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

**Step 3: Enable Netlify Identity (for CMS)**
1. In Netlify dashboard → Site settings → Identity
2. Click "Enable Identity"
3. Go to Settings → Registration → Invite only (recommended)
4. Under Services → Enable Git Gateway
5. Invite team members who need CMS access

**Step 4: Update Site URL**
1. Go to Domain settings
2. Add your custom domain
3. Update `site` in [astro.config.mjs](astro.config.mjs)

**Step 5: Environment Variables (if needed)**
- Settings → Environment variables
- Add `PUBLIC_SITE_URL=https://yourdomain.com`

### 7. SEO Setup Post-Launch

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap-index.xml`

**Test Structured Data:**
1. Visit [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your URL
3. Verify MusicGroup, Service, and LocalBusiness schemas are valid

**Analytics Setup:**
- Add Google Analytics or Plausible (privacy-focused)
- Track: page views, contact clicks, video plays

**Performance Testing:**
1. Run [PageSpeed Insights](https://pagespeed.web.dev/)
2. Target scores: 90+ across all metrics
3. Monitor Core Web Vitals

### 8. Create Placeholder Content (Optional)

If you don't have real content yet, you can create placeholder images:

```bash
# Create placeholder images for gallery (example using ImageMagick)
convert -size 600x600 xc:#3182ce -gravity center -pointsize 40 -annotate +0+0 "Gallery 1" public/images/gallery/placeholder-1.jpg

# Or use online tools like:
# - placeholder.com
# - placehold.co
# - unsplash.com (free high-quality photos)
```

---

## Pre-Launch Checklist

### Content
- [ ] Hero video added (<3MB, optimized)
- [ ] Hero poster image added
- [ ] Gallery images added (6-12 photos)
- [ ] Client logos added
- [ ] All text content customized (no placeholders)
- [ ] Contact email and WhatsApp updated
- [ ] Favicon created and added

### SEO
- [ ] Meta tags customized for your brand
- [ ] Schema.org data updated with real info
- [ ] Domain configured in config files
- [ ] robots.txt updated with correct domain
- [ ] Open Graph image created (1200x630px)

### Performance
- [ ] Images compressed (80-85% quality)
- [ ] Video under 3MB
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] Lighthouse audit passed (90+ scores)

### Functionality
- [ ] All navigation links work
- [ ] Accordions expand/collapse properly
- [ ] Mobile menu functions correctly
- [ ] mailto link opens email client
- [ ] WhatsApp link opens WhatsApp
- [ ] Video plays in hero section
- [ ] Smooth scroll works

### Accessibility
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG 2.1 AA
- [ ] Screen reader tested (optional)

### CMS
- [ ] Decap CMS accessible at /admin/
- [ ] Netlify Identity configured
- [ ] Team members invited
- [ ] Test content edit and publish

### Deployment
- [ ] Pushed to GitHub
- [ ] Deployed to Netlify
- [ ] Custom domain configured
- [ ] SSL certificate active (HTTPS)
- [ ] Sitemap submitted to Google

---

## Maintenance & Updates

### Regular Tasks

**Monthly:**
- Update gallery with new event photos
- Check and fix broken links
- Review Google Search Console for issues
- Monitor site performance metrics

**As Needed:**
- Add new services via CMS
- Update contact information
- Refresh testimonials (when implemented)
- Update Schema.org data if business changes

### Adding Workshops Page (Future)

When you're ready to add workshops:

1. Create workshop content in [src/content/workshops/](src/content/workshops/)
2. Create list page: [src/pages/workshops/index.astro](src/pages/workshops/index.astro)
3. Create dynamic route: [src/pages/workshops/[slug].astro](src/pages/workshops/[slug].astro)
4. Add to Navbar component
5. Add to Decap CMS config
6. Add Event schema to StructuredData component

---

## Troubleshooting

### Dev Server Won't Start
```bash
# Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json .astro
npm install
npm run dev
```

### Tailwind Styles Not Applying
- Check that `@import "tailwindcss";` is in [src/styles/global.css](src/styles/global.css)
- Verify `@tailwindcss/vite` plugin is in [astro.config.mjs](astro.config.mjs)
- Restart dev server

### CMS Not Loading
- Ensure Netlify Identity is enabled
- Check that `/admin/index.html` and `/admin/config.yml` exist
- For local testing, run `npx decap-server` in separate terminal

### Images Not Showing
- Check file paths (case-sensitive)
- Verify images are in `public/` directory
- Check browser console for 404 errors

### Video Not Playing
- Ensure video is in MP4 format (H.264 codec)
- Check file size (<3MB recommended)
- Add poster image as fallback
- Test in multiple browsers

---

## Technical Details

### Performance Targets

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Lighthouse Scores:**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 100

### Browser Support

**Fully Supported:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)

**Graceful Degradation:**
- Older browsers get static images instead of video
- No JavaScript features required for core functionality

### Tech Stack Details

**Astro 5.x:**
- Zero JavaScript by default
- Static site generation
- File-based routing
- Component islands architecture

**Tailwind CSS v3:**
- Utility-first CSS framework
- Stable and production-ready
- All standard utilities available
- Automatic purging of unused styles
- Custom theme configuration via tailwind.config.cjs

**Decap CMS:**
- Git-based (no database needed)
- Version control for all content
- Local and production modes
- Image upload with automatic optimization

---

## Support & Resources

### Documentation
- [Astro Docs](https://docs.astro.build/)
- [Tailwind CSS v3 Docs](https://tailwindcss.com/docs)
- [Decap CMS Docs](https://decapcms.org/docs/)

### SEO Resources
- [Google Search Console](https://search.google.com/search-console)
- [Schema.org - MusicGroup](https://schema.org/MusicGroup)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

### Performance Tools
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/)

### Image Optimization Tools
- [TinyPNG](https://tinypng.com/) - Image compression
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [HandBrake](https://handbrake.fr/) - Video compression

---

## Project Status

**Current Version:** 1.0.0 (Initial Build)

**Implemented:**
✅ Complete landing page structure
✅ All 6 sections (Hero, About, Services, Gallery, Logos, Contact)
✅ SEO optimization with structured data
✅ Decap CMS integration
✅ Mobile-responsive design
✅ Accessibility features
✅ Performance optimizations

**Ready For:**
- Content addition
- Media upload (video, images, logos)
- Domain configuration
- Netlify deployment
- Google Search Console setup

**Future Enhancements:**
- Workshops page
- Testimonials section
- Blog for SEO content
- Advanced analytics
- Booking system integration

---

## Contact & Credits

Built with Astro, Tailwind CSS, and Decap CMS for exceptional performance and SEO.

**Last Updated:** January 23, 2026
**Build Time:** ~2 hours
**Production Ready:** Yes (after content addition)

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server
npx decap-server        # Start CMS local backend

# Production
npm run build           # Build for production
npm run preview         # Preview production build

# Maintenance
npm run format          # Format code
npm run astro check     # Check for errors
npm install             # Install dependencies
rm -rf node_modules && npm install  # Fresh install
```

---

**Remember:** This is a production-ready foundation. Focus on adding your unique content, real photos from events, and authentic testimonials to make the site truly represent Inercia Music Group!

Good luck with your launch! 🎵🎉
