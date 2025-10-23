# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.0] - 2025-10-23

### Added
- WCAG 2.2 AA accessibility compliance with enhanced contrast and semantic HTML
- Skip navigation link for keyboard users
- ARIA labels and landmarks for screen readers (role="banner", role="main", role="contentinfo")
- Visible focus indicators for better keyboard navigation
- Dynamic copyright year using JavaScript
- Descriptive aria-labels for all external links
- Theme color meta tag for browser customization

### Changed
- Increased font sizes across entire site for better readability (20-25% increase)
- Improved color contrast ratios - all text now white (#fff) for maximum contrast (21:1 ratio)
- Enhanced footer with copyright text "Copyright 1973-[year] Andrew Jonathon Miller"
- Updated footer development credit to "Custom Website Development by 84EM" with underline
- Updated page title for better SEO context
- All external links now properly marked with rel="noopener" and target="_blank"
- Decorative dividers marked with aria-hidden="true" for screen readers

## [1.2.0] - 2025-08-28

### Added
- Third artist section for Solo Piano (andrewmillerpiano.com)
- Tri-panel layout showcasing three musical projects

### Changed
- Transformed dual-artist showcase into three-artist landing page
- Updated documentation to reflect three-artist design

## [1.1.0] - 2025-08-28

### Added
- Dual-artist showcase layout for Subtlerage and MSFMA
- Individual artist sections with descriptions and call-to-action links
- Visual dividers between artist sections
- Dark gradient backgrounds for each artist section

### Changed
- Transformed coming soon page into functional dual-artist showcase
- Updated README to reflect dual-artist landing page
- Updated build documentation for accuracy

### Removed
- CSS minification suffix from build process (files keep original names)

## [1.0.0] - 2025-07-28

### Added
- Canonical URL for SEO (https://andrewmillermusic.com)
- Basic static site structure with Gulp build system

## [0.3.0] - 2025-07-18

### Added
- Automatic sitemap.xml generation for SEO optimization
- Image optimization during build process

### Changed
- Adjusted image optimization settings for better performance

## [0.2.0] - 2025-07-17

### Added
- Robots meta tag for search engine control
- Cloudflare Pages deployment configuration
- Main entry point to wrangler config
- Assets directory configuration

### Changed
- Updated Wrangler to version 4.25.0

## [0.1.0] - 2025-07-17

### Added
- Initial project setup with Gulp build system
- Basic HTML, CSS, and build pipeline structure
- Cloudflare Pages deployment support

[Unreleased]: https://github.com/84em/andrewmillermusic/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/84em/andrewmillermusic/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/84em/andrewmillermusic/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/84em/andrewmillermusic/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/84em/andrewmillermusic/compare/v0.3.0...v1.0.0
[0.3.0]: https://github.com/84em/andrewmillermusic/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/84em/andrewmillermusic/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/84em/andrewmillermusic/releases/tag/v0.1.0
