# Agenorwoth Lleyton Adrian - Portfolio

A modern, responsive portfolio website showcasing my work as a software developer and designer.

## Features

- **Dark/Light Mode**: Theme toggle with system preference detection and local storage persistence
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Glassmorphic UI**: Premium frosted glass navbar with backdrop blur effects
- **Interactive Project Showcase**: Auto-rotating carousel displaying featured projects
- **Animated Backgrounds**: Canvas-based neuron network and reflective gradient surfaces
- **Token-Driven Design System**: CSS custom properties for consistent theming
- **Mobile Navigation**: Animated hamburger menu with staggered transitions
- **Project Detail Pages**: Dedicated pages for each project with full descriptions
- **Contact Form**: Integrated contact section for direct communication
- **Smooth Animations**: Fade-in effects, hover states, and transition animations

## Tech Stack

### Frontend
- React 19.1.1
- React Router DOM 7.9.4
- Vite 7.1.7

### Styling
- Tailwind CSS 4.1.15
- CSS Custom Properties (Design Tokens)
- Glassmorphism and Backdrop Filters

### UI Components & Icons
- Lucide React 0.545.0
- FontAwesome (React integration)
- Radix UI (Toast notifications)

### Utilities
- clsx & tailwind-merge (class management)
- class-variance-authority (variant-based styling)

### Development Tools
- ESLint
- Vite Plugin React

## Project Structure

```
my_portifolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutmeSection.jsx
│   │   ├── SkilsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── FooterSection.jsx
│   │   ├── NeuronBackground.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── LanguageSection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProjectDetail.jsx
│   │   └── NotFound.jsx
│   ├── lib/
│   │   ├── utils.js
│   │   └── useTheme.js
│   ├── assets/
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── screenshots/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/lley-tonn/my_portifolio.git
cd my_portifolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Screenshots

### Light Mode
![Light Mode Screenshot](./screenshots/light-mode.png)

### Dark Mode
![Dark Mode Screenshot](./screenshots/dark-mode.png)

### Mobile View
![Mobile View Screenshot](./screenshots/mobile-view.png)

## Design System

The portfolio implements a token-driven design system using CSS custom properties:

- **Color Tokens**: HSL-based color scheme with semantic naming
- **Reflection System**: Multi-layer gradient backgrounds for premium depth
- **Elevation Tokens**: Z-index management for visual hierarchy
- **Animation Tokens**: Reusable keyframe animations
- **Responsive Tokens**: Breakpoint-based container sizing

## Future Improvements

- Add blog section for technical writing
- Integrate GitHub API for dynamic repository showcase
- Implement form validation and email service integration
- Add loading states and skeleton screens
- Implement progressive image loading
- Add accessibility improvements (ARIA labels, keyboard navigation)
- Optimize bundle size with code splitting
- Add unit and integration tests

## Contact

Portfolio: https://www.lagenorwoth.site

LinkedIn: https://www.linkedin.com/in/lley-tonn

GitHub: https://github.com/lley-tonn

Email: lagenorwoth@gmail.com

## License

MIT License

Copyright (c) 2025 Agenorwoth Lleyton Adrian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
