# AcmeCloud - SaaS Landing Page Template

A modern, responsive SaaS landing page template built with React, Vite, and Tailwind CSS. This template provides a clean, professional design with reusable components and sections that you can easily customize for your own SaaS product.

## 🚀 Features

- **Clean Component Library**: Reusable building blocks with consistent spacing, states, and typography
- **Responsive Design**: Layouts that scale seamlessly from mobile to desktop
- **Accessible Patterns**: Keyboard-friendly buttons, sensible semantics, and readable contrast
- **Fast Iterations**: Dummy content and data arrays for quick prototyping
- **Polished Pricing UI**: Tiered plans with highlighted recommendations and feature lists
- **Trust-Building Social Proof**: Testimonial cards designed for readability and visual balance
- **Modern Tech Stack**: React 19, Vite, Tailwind CSS 4

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Icons**: Custom SVG icons
- **Linting**: ESLint with React hooks and refresh plugins

## 📁 Project Structure

```
dipcloud/
├── public/
│   └── sitelogos.jpg          # Site logo/favicon
├── src/
│   ├── components/
│   │   ├── utils.jsx          # Utility components (Container, Button, Card, etc.)
│   │   ├── NavBar.jsx         # Navigation bar component
│   │   ├── Hero.jsx           # Hero section with main value proposition
│   │   ├── Features.jsx       # Features showcase section
│   │   ├── Pricing.jsx        # Pricing plans section
│   │   ├── Testimonials.jsx   # Customer testimonials section
│   │   ├── CTA.jsx            # Call-to-action section
│   │   └── Footer.jsx         # Footer component
│   ├── fix/
│   │   └── fix.jsx            # Additional utility components (backup/alternative)
│   ├── HomePage.jsx           # Main page component combining all sections
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles and Tailwind imports
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Project dependencies and scripts
├── eslint.config.js           # ESLint configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dipcloud
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 🎨 Customization Guide

### Changing Content

1. **Hero Section**: Edit `src/components/Hero.jsx` to update the main headline, description, and call-to-action buttons
2. **Features**: Modify the `features` array in `src/components/Features.jsx` to update feature descriptions and icons
3. **Pricing**: Update the `plans` array in `src/components/Pricing.jsx` with your pricing tiers
4. **Testimonials**: Replace testimonial data in `src/components/Testimonials.jsx`
5. **Branding**: Update colors, fonts, and logo in the components and `src/index.css`

### Styling

The project uses Tailwind CSS classes for styling. Key design tokens:
- Primary color: Slate (slate-900, slate-600, etc.)
- Accent colors: Indigo, Sky, Emerald gradients
- Border radius: Rounded-xl, rounded-2xl
- Shadows: Shadow-sm, shadow-md

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/HomePage.jsx`
3. Use the utility components from `utils.jsx` for consistency

## 📱 Components Overview

### Utility Components (`utils.jsx`)
- `Container`: Responsive container with max-width and padding
- `Button`: Flexible button component with variants (primary, secondary, ghost)
- `Badge`: Small badge for labels and tags
- `Card`: Content card with shadow and border
- `SectionHeader`: Consistent section headers with eyebrow, title, and subtitle
- `MiniStat`: Small statistic display
- Various icons: ArrowRightIcon, CheckIcon, etc.

### Page Sections
- **NavBar**: Sticky navigation with logo and menu items
- **Hero**: Main value proposition with CTA buttons
- **Features**: Grid of feature cards with icons and descriptions
- **Pricing**: Three-tier pricing plans with feature lists
- **Testimonials**: Customer testimonials with avatars and quotes
- **CTA**: Final call-to-action section
- **Footer**: Site footer with links and copyright

## 🔧 Development

### Code Style

- Uses ESLint for code linting
- Follows React best practices
- Uses functional components with hooks
- Consistent naming conventions (PascalCase for components)

### Performance

- Built with Vite for fast development and optimized builds
- Tree-shaking enabled
- Modern React 19 with concurrent features

## 📄 License

This project is a template and can be used freely for personal or commercial projects.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues, please open an issue in the repository or contact the maintainers.
