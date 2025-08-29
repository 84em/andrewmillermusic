# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Static website for Andrew Miller Music, deployed on Cloudflare Pages. Features a three-artist landing page showcasing Subtlerage, MSFMA, and Solo Piano with a tri-panel design, dark theme, and monospace typography.

## Essential Commands

### Development
```bash
npm run dev          # Build and watch files (recommended for development)
npm run build        # Production build only
npm run watch        # Watch files only (no initial build)
```

### Deployment
```bash
npm run deploy           # Deploy to production (andrewmillermusic.com)
npm run deploy:preview   # Deploy to preview environment
```

## Architecture

### Build System
- **Gulp 4.x** handles all build tasks through `gulpfile.js`
- Source files: `src/` → Built files: `dist/`
- Automatic optimization: CSS/JS minification, HTML compression, image optimization
- SEO: Automatic sitemap.xml generation from HTML files

### Key Files
- `src/index.html` - Main HTML (three-artist landing page for Subtlerage, MSFMA, and Solo Piano)
- `src/css/styles.css` - Styles (tri-panel layout, dark theme, monospace font)
- `gulpfile.js` - All build task definitions
- `wrangler.toml` - Cloudflare Pages deployment config

### Development Workflow
1. Edit files in `src/` directory only
2. Run `npm run dev` for automatic rebuilding
3. Built files appear in `dist/` (do not edit directly)
4. Deploy with `npm run deploy` when ready

### Important Notes
- CSS files are minified but keep their original names (styles.css → styles.css)
- All JavaScript files in `src/js/` concatenate into `dist/js/main.min.js`
- Images in `src/images/` are automatically optimized during build
- The site uses canonical URLs for SEO (https://andrewmillermusic.com)
- Footer contains link to 84EM (developer/agency)

### Site Content
- **Subtlerage** (subtlerage.com) - Ambient electronic rock project with introspective soundscapes
- **MSFMA** (msfma.com) - Instrumental music ranging from piano to ambient to rock
- **Solo Piano** (andrewmillerpiano.com) - Classical and contemporary piano compositions
- Tri-panel design on desktop (three equal sections), stacked layout on mobile