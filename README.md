# Andrew Miller Music - Gulp Build Setup

This project is a three-artist landing page showcasing Subtlerage, MSFMA, and Solo Piano. It includes a Gulp build system for optimizing CSS, HTML, JavaScript, and images, and is configured for deployment to Cloudflare Pages.

## Project Structure

```
├── src/                    # Source files
│   ├── css/               # CSS source files
│   │   └── styles.css     # Main stylesheet (extracted from index.html)
│   ├── js/                # JavaScript source files
│   ├── images/            # Image source files
│   └── index.html         # HTML source file
├── dist/                  # Built/optimized files
│   ├── css/               # Minified CSS files
│   ├── js/                # Minified JavaScript files
│   ├── images/            # Optimized images
│   └── index.html         # Minified HTML file
├── gulpfile.js            # Gulp configuration
├── package.json           # Node.js dependencies
├── wrangler.toml          # Cloudflare Pages configuration
└── README.md              # This file
```

## Setup

1. Install Node.js and npm
2. Install dependencies:
   ```bash
   npm install
   ```

## Available Gulp Tasks

- `gulp build` - Build all assets for production
- `gulp dev` - Build assets and watch for changes
- `gulp watch` - Watch files for changes and rebuild
- `gulp clean` - Clean the dist directory
- `gulp css` - Process CSS files only
- `gulp js` - Process JavaScript files only
- `gulp html` - Process HTML files only
- `gulp images` - Optimize images only
- `gulp sitemap` - Generate sitemap.xml file

## What Each Task Does

### CSS Task
- Minifies CSS files
- Keeps original filenames (no `.min` suffix)
- Outputs to `dist/css/`

### JavaScript Task
- Concatenates all JS files into `main.js`
- Minifies the code
- Adds `.min` suffix
- Outputs to `dist/js/`

### HTML Task
- Minifies HTML files
- Removes comments and whitespace
- Outputs to `dist/`

### Images Task
- Optimizes images (JPEG, PNG, GIF, SVG)
- Reduces file sizes without quality loss
- Outputs to `dist/images/`

### Sitemap Task
- Generates sitemap.xml for SEO purposes
- Scans all HTML files in the dist directory
- Creates XML sitemap with proper URLs and metadata
- Outputs sitemap.xml to `dist/` directory

## Development Workflow

1. Edit files in the `src/` directory
2. Run `npm run dev` to build and watch for changes
3. The optimized files will be generated in the `dist/` directory
4. Use the files in `dist/` for production deployment

## Deployment to Cloudflare Pages

This project is configured for deployment to Cloudflare Pages using Wrangler CLI.

### Available NPM Scripts

- `npm run build` - Build all assets for production
- `npm run dev` - Build assets and watch for changes
- `npm run watch` - Watch files for changes and rebuild
- `npm run deploy` - Deploy to Cloudflare Pages (production)
- `npm run deploy:preview` - Deploy to Cloudflare Pages (preview)

### Deployment Steps

1. **First-time setup:**
   ```bash
   # Install dependencies (including Wrangler)
   npm install

   # Login to Cloudflare (if not already logged in)
   npx wrangler login
   ```

2. **Deploy to production:**
   ```bash
   # Build the project
   npm run build

   # Deploy to Cloudflare Pages
   npm run deploy
   ```

3. **Deploy preview:**
   ```bash
   # Build and deploy preview
   npm run build
   npm run deploy:preview
   ```

### Configuration

The deployment is configured via `wrangler.toml`:
- **Build output directory:** `dist/`
- **Production environment:** `andrewmillermusic`
- **Preview environment:** `andrewmillermusic-preview`

## Changes Made

- Extracted inline CSS from `index.html` into separate `src/css/styles.css` file
- Updated `index.html` to reference external CSS file (`css/styles.css`)
- Set up complete Gulp build pipeline with optimization tasks
- Created proper source/build directory structure
- Added Cloudflare Pages deployment configuration with Wrangler CLI
- Added deployment scripts to package.json (`deploy` and `deploy:preview`)
- Created `wrangler.toml` configuration file for Cloudflare Pages
- Updated `.gitignore` to exclude Cloudflare-specific files
- **Added sitemap.xml generation as part of the Gulp build process**
  - Integrated `gulp-sitemap` plugin for automatic sitemap generation
  - Sitemap is generated after HTML processing and included in the main build task
  - Sitemap automatically updates when HTML files change during development
  - Configured with proper site URL and SEO metadata

- **Updated website design to feature three-artist landing page**
  - Tri-panel layout showcasing Subtlerage, MSFMA, and Solo Piano
  - Dark theme with monospace typography
  - Responsive design (three equal panels on desktop, stacked on mobile)
  - Links to artist websites (subtlerage.com, msfma.com, and andrewmillerpiano.com)
- **Modified CSS build process to maintain original filenames**
  - CSS files are minified but keep their names (styles.css → styles.css)
  - Ensures compatibility between development and production environments

The website now features a professional three-artist landing page with a modern build process for optimization and maintainability, plus automated deployment to Cloudflare Pages and SEO-friendly sitemap generation.
