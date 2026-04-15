# Phoenix Development - React Application

## Project Overview

This is a React-based real estate website (Phoenix Development - فينيكس للتطوير العقاري) converted from a static HTML site to a modern, production-ready React application.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v7
- **Icons**: Material Symbols Outlined (Google Fonts)

## Project Structure

```
phoenix-react/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Fixed navigation with scroll effect
│   │   ├── Hero.jsx         # Hero section with CTA
│   │   ├── About.jsx        # Company info with stats
│   │   ├── Services.jsx    # 5 service cards
│   │   ├── WhyChooseUs.jsx  # Feature highlights
│   │   ├── FeaturedProjects.jsx # Bento grid projects
│   │   ├── Investment.jsx   # ROI section
│   │   ├── Testimonials.jsx # Client reviews
│   │   ├── Contact.jsx      # Contact form
│   │   ├── WhatsAppButton.jsx # Floating button
│   │   └── Footer.jsx       # Site footer
│   ├── assets/              # Static assets
│   ├── hooks/               # Custom React hooks
│   ├── layouts/             # Layout components
│   ├── pages/               # Page components
│   ├── routes/              # Route definitions
│   ├── services/            # API services
│   ├── utils/               # Utility functions
│   ├── styles/              # Additional styles
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind config
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies
```

## Features

- **RTL Support**: Full Arabic RTL layout
- **Responsive Design**: Mobile-first with breakpoints
- **Custom Tailwind Theme**: Exact colors/fonts from original HTML
- **Accessibility**: ARIA labels, semantic HTML
- **Smooth Scrolling**: Native CSS scroll behavior
- **Form Handling**: Controlled form components
- **Scroll Effects**: Navbar transition on scroll

## Installation & Setup

```bash
# Navigate to project directory
cd phoenix-react

# Install dependencies
npm install

# Start development server
npm run dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Build Output

```
dist/
├── index.html
└── assets/
    ├── index-CAmU8Gkk.css  (28.37 kB)
    └── index-dbxm07Jr.js   (254.91 kB)
```

## Design System

### Colors
- Primary: `#051125`
- Secondary: `#775a19`
- Surface: `#f9f9fe`
- And 50+ custom theme colors

### Fonts
- Headlines: Noto Serif (Arabic + English)
- Body: Plus Jakarta Sans (English) / Tajawal (Arabic fallback)

## Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Custom Server
```bash
npm run preview
# Runs on http://localhost:4173
```

## Customization

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `App.jsx`

### Modifying Colors
Edit `src/index.css` @theme block

### Adding Routes
Update `src/main.jsx` BrowserRouter configuration

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS/Android)

## License

© 2024 Phoenix Development. All rights reserved.