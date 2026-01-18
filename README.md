# Pearl White Engineering – Official Business Website

A professional, fully responsive business website for Pearl White Metal and Iron Works, specializing in precision fabrication, welding, cutting, and CNC machining services.

## 🔗 Live Website
https://www.pearlwhiteengg.com

## 📌 Project Type
Production-ready business website

## 🛠 Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons, Lucide React
- **Routing**: React Router DOM v7
- **Animations**: Framer Motion, AOS (Animate On Scroll)
- **Charts**: Chart.js
- **Package Manager**: npm

## ✨ Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Multi-page SPA with client-side routing
- ✅ Smooth animations and scroll effects
- ✅ Fixed navigation bar with mobile menu
- ✅ Service showcase with detailed pages
- ✅ Testimonials and statistics sections
- ✅ Contact forms with Google Maps integration
- ✅ WhatsApp floating button
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Production-ready build
- ✅ Fixed routing issues (refresh errors resolved)

## 📁 Project Structure
```
src/
├── components/
│   ├── home/
│   │   ├── About.jsx
│   │   ├── CTA.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Stats.jsx
│   │   ├── Testimonials.jsx
│   │   └── WhyChooseUs.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProgressBar.jsx
│   └── ScrollToTop.jsx
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   └── Services.jsx
├── assets/
│   └── [images and static files]
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd pearlwhite-main

# Install dependencies
npm install
```

### Development
```bash
# Start development server
npm run dev

# The site will be available at http://localhost:5173
```

### Building for Production
```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 🔧 Fixed Issues

### 1. Routing Error on Page Refresh
**Problem**: Refreshing the page would result in a 404 error because the server didn't know how to handle client-side routes.

**Solution**: 
- Updated `vite.config.js` with server configuration for SPA routing
- Fixed `public/_redirects` file (Netlify configuration)
- Added catch-all route in React Router

### 2. Mobile Responsiveness
**Improvements Made**:
- Enhanced responsive breakpoints across all components
- Improved padding and spacing for mobile devices
- Better font scaling for different screen sizes
- Mobile-optimized navigation menu
- Responsive grid layouts (1 col mobile → 2 cols tablet → 3 cols desktop)

### 3. Deployment Configuration
- Added `netlify.toml` for proper Netlify deployment
- Added `.env.example` for environment configuration
- Improved SEO meta tags in `index.html`
- Added security headers

## 📱 Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Netlify will automatically build using `netlify.toml` configuration
4. Custom domain is already configured

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_APP_NAME=Pearl White Fabrication
VITE_APP_URL=https://www.pearlwhiteengg.com
VITE_WHATSAPP_NUMBER=971504733247
VITE_EMAIL=pearlwhiteuae@gmail.com
```

See `.env.example` for all available options.

## 📊 Performance
- Optimized bundle splitting with vendor code separation
- Image optimization with object-fit
- CSS and JS minification in production
- Font optimization with Google Fonts preconnect

## 🔒 Security
- Content Security Policy headers
- XSS Protection enabled
- Clickjacking protection
- Referrer policy configured

## 📝 Pages
- **Home**: Hero section with services overview
- **Services**: Detailed service listings with descriptions
- **About**: Company story, values, and mission
- **Contact**: Contact form, location map, and business hours

## 🎨 Design Features
- Consistent color scheme (Saddle Brown, Parchment, Alabaster)
- Professional typography (Poppins heading, Roboto body)
- Smooth animations and transitions
- Accessible UI with proper ARIA labels
- Clean and modern design

## 📞 Contact Information
- **Phone**: +971 504733247, +971 547714905
- **Email**: pearlwhiteuae@gmail.com
- **Location**: Mussafah M11, Abu Dhabi, UAE
- **WhatsApp**: +971 504733247

## 👨‍💻 Development Notes

### Common Tasks
```bash
# Lint code
npm run lint

# Build and preview
npm run build && npm run preview

# Clean build artifacts
rm -rf dist node_modules
npm install
```

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License
All rights reserved © Pearl White Fabrication

## 🤝 Support
For issues or questions, contact the development team or create an issue in the repository.