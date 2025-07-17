# Andrew Miller Music - Gulp Build Setup

This project includes a Gulp build system for optimizing CSS, HTML, JavaScript, and images, and is configured for deployment to Cloudflare Pages.

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

## What Each Task Does

### CSS Task
- Minifies CSS files
- Adds `.min` suffix to output files
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
- Updated `index.html` to reference external CSS file (`css/styles.min.css`)
- Set up complete Gulp build pipeline with optimization tasks
- Created proper source/build directory structure
- Added Cloudflare Pages deployment configuration with Wrangler CLI
- Added deployment scripts to package.json (`deploy` and `deploy:preview`)
- Created `wrangler.toml` configuration file for Cloudflare Pages
- Updated `.gitignore` to exclude Cloudflare-specific files

The website functionality remains exactly the same, but now has a professional build process for optimization and maintainability, plus automated deployment to Cloudflare Pages.
