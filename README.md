# Necro IPTV Website

This is a frontend-only Next.js application for the Necro IPTV website.

## Project Structure

- `frontend/` - Next.js application with all frontend code
- `admin-backup/` - Backup of removed admin panel
- `backend-backup/` - Backup of removed backend services
- `unused-images/` - Backup of removed unused images

## External Dependencies

The frontend connects to external WordPress APIs for content:

- **Reviews**: `https://necroiptv.us/wp-json/wp/v2` (with fallback to default reviews)
- **Blog**: `https://blog.necroiptv.us/wp-json/wp/v2` (with fallback to default blog posts)

## Development

```bash
cd frontend
npm install
npm run dev
```

## Deployment

```bash
# Frontend only deployment
cd frontend
npm run build
npm start
```

Or use the deploy script:
```bash
./deploy.sh
```

## Changes Made

### Removed Components
- Removed local backend and admin components
- Updated Next.js configuration to remove localhost references
- Updated deployment scripts for frontend-only deployment
- Services already have fallback mechanisms for external API failures

### Image Cleanup
Removed unused images to optimize build size and performance:

**Removed unused images (moved to `unused-images/` folder):**
- `hero-bg.jpg` (4 duplicate hero backgrounds - kept hero-bg-new.jpg and hero-bg-blur.jpg)
- `hero-bg.webp`
- `logo.png` (old logo - kept logo-new.webp)
- `preview-hero.jpg` (unused preview image)
- `logos/logo-11.png` through `logos/logo-26.png` (16 unused logo files - kept logo-1.png through logo-10.png)

**Kept essential images:**
- `logo-new.webp` (main logo)
- `hero-bg-new.jpg` & `hero-bg-blur.jpg` (hero section)
- `pattern.svg` (background pattern)
- `blog-placeholder.jpg` (blog fallback image)
- `review-auth-1.png`, `review-auth-2.png`, `review-auth-3.png` (review avatars)
- `logos/logo-1.png` through `logos/logo-10.png` (platform logos)
- `favicon.ico` & `favicon.png` (favicons)

**Size reduction:** Removed 20 unused image files, reducing build size and improving performance.
