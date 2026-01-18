# 🚀 Deployment Guide - Pearl White Engineering Website

## Overview
This guide explains how to deploy the Pearl White Engineering website to production.

## Fixed Issues Summary ✅

### 1. **Routing Error on Page Refresh** (FIXED)
- **Issue**: Refreshing pages showed 404 errors
- **Cause**: Server didn't know about client-side routes
- **Solution Applied**:
  - Updated `vite.config.js` with SPA routing configuration
  - Fixed `public/_redirects` for Netlify
  - Added catch-all route in React Router

### 2. **Mobile Responsiveness** (FIXED)
- **Improvements**:
  - All components now use responsive Tailwind breakpoints
  - Mobile-first design approach
  - Better spacing and padding for small screens
  - Responsive typography (text scales with viewport)
  - Mobile navigation menu works flawlessly

### 3. **Deployment Configuration** (FIXED)
- Added `netlify.toml` for automated deployment
- Added `.env.example` for environment variables
- Enhanced SEO meta tags
- Added security headers

## Deployment Platforms

### Option 1: Netlify (Recommended)
The easiest way to deploy this React/Vite application.

#### Steps:
1. Push code to GitHub
   ```bash
   git add .
   git commit -m "Fix: Routing and responsive design improvements"
   git push origin main
   ```

2. Go to [netlify.com](https://netlify.com)

3. Click "New site from Git"

4. Connect your GitHub account and select the repository

5. Build settings (pre-configured in `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

6. Add environment variables (if needed):
   ```
   VITE_APP_NAME=Pearl White Fabrication
   VITE_WHATSAPP_NUMBER=971504733247
   ```

7. Click Deploy

#### Custom Domain:
1. Go to Site Settings → Domain Management
2. Add your domain (pearlwhiteengg.com)
3. Update DNS records as instructed

### Option 2: Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import GitHub repository
4. Vercel auto-detects Vite configuration
5. Deploy

### Option 3: Traditional Hosting (cPanel, etc.)
```bash
# Build the project
npm run build

# Upload the 'dist' folder to your server's public_html directory

# Create .htaccess file in public_html for routing:
```
Create `.htaccess` file in your server's public directory:
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Pre-Deployment Checklist

- [ ] All pages load without 404 errors
- [ ] Mobile responsive on all breakpoints
- [ ] Contact form works
- [ ] WhatsApp link opens correctly
- [ ] Images load properly
- [ ] No console errors
- [ ] All links navigate correctly
- [ ] Meta tags are proper (for SEO)
- [ ] Build completes without errors

## Running Pre-Deployment Tests

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test the build
npm run build
npm run preview

# Check for linting issues
npm run lint
```

## Build Output

The build process creates optimized files:
```
dist/
├── index.html          # Main HTML file
├── assets/
│   ├── *.js           # JavaScript bundles (minified)
│   ├── *.css          # Stylesheets (minified)
│   └── images/        # Optimized images
└── vite.svg           # Favicon
```

## Performance Tips

1. **Image Optimization**: Ensure images are optimized before upload
2. **Caching**: The `netlify.toml` includes cache headers
3. **Bundle Size**: Check with `npm run build` - aim for < 500KB total

## Monitoring

After deployment:
1. Test all pages work correctly
2. Check mobile responsiveness
3. Verify contact form functionality
4. Monitor performance (Netlify Analytics)
5. Check for JavaScript errors (Browser DevTools)

## Troubleshooting

### "Page Not Found" Error
- Check `netlify.toml` is in root directory
- Ensure `_redirects` file is in `public/` folder
- Verify build output includes these files

### Styles Not Loading
- Clear browser cache
- Check Tailwind CSS build in `vite.config.js`
- Ensure CSS is imported in components

### Images Not Showing
- Verify image paths use relative imports
- Check image files exist in `src/assets/`
- Use proper import syntax: `import image from '../../assets/image.jpg'`

### WhatsApp Link Not Working
- Ensure phone number is correct: +971504733247
- WhatsApp needs to be installed on device
- Web version: whatsapp.com/contact works on desktop

## Environment Variables

Create `.env` file in root directory:
```env
VITE_APP_NAME=Pearl White Fabrication
VITE_APP_URL=https://www.pearlwhiteengg.com
VITE_WHATSAPP_NUMBER=971504733247
VITE_PHONE_1=+971504733247
VITE_PHONE_2=+971547714905
VITE_EMAIL=pearlwhiteuae@gmail.com
VITE_GOOGLE_ANALYTICS_ID=
```

## Rollback Process

If something goes wrong:

1. **Netlify**: Automatic rollback available in Deployments tab
2. **GitHub**: Revert commit: `git revert HEAD`
3. **Manual**: Re-upload previous build files

## Support

For deployment issues:
- Check Netlify build logs
- Review browser console for errors
- Verify all configuration files exist
- Ensure all environment variables are set

---

**Deployed by**: Pearl White Engineering Team  
**Last Updated**: January 2026  
**Status**: ✅ Production Ready
