# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Static website for Andrew Miller Music, deployed on Cloudflare Pages. Features a dual-artist landing page showcasing Subtlerage and MSFMA with a split-screen design, dark theme, and monospace typography.

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
- `src/index.html` - Main HTML (dual-artist landing page for Subtlerage and MSFMA)
- `src/css/styles.css` - Styles (split-screen layout, dark theme, monospace font)
- `gulpfile.js` - All build task definitions
- `wrangler.toml` - Cloudflare Pages deployment config

### Development Workflow
1. Edit files in `src/` directory only
2. Run `npm run dev` for automatic rebuilding
3. Built files appear in `dist/` (do not edit directly)
4. Deploy with `npm run deploy` when ready

### Important Notes
- All JavaScript files in `src/js/` concatenate into `dist/js/main.js`
- Images in `src/images/` are automatically optimized during build
- The site uses canonical URLs for SEO (https://andrewmillermusic.com)
- Footer contains link to 84EM (developer/agency)

### Site Content
- **Subtlerage** (subtlerage.com) - Ambient electronic rock project with introspective soundscapes
- **MSFMA** (msfma.com) - Instrumental music ranging from piano to ambient to rock
- Split-screen design on desktop, stacked layout on mobile