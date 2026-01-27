# Agenorwoth Lleyton Adrian - Portfolio

A modern, responsive portfolio website showcasing my work as a software developer and designer. Built with React 19, Vite, and Tailwind CSS, featuring a production-ready architecture designed for scalability and maintainability.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [User Flow & Interactions](#user-flow--interactions)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)
- [Design System](#design-system)
- [Performance Optimizations](#performance-optimizations)
- [Browser Compatibility](#browser-compatibility)
- [Future Improvements](#future-improvements)
- [Contact](#contact)
- [License](#license)

## Features

- **Construction Notice**: Dismissible modal notification informing visitors the site is under active development
- **Dark/Light Mode**: Theme toggle with system preference detection and local storage persistence
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Glassmorphic UI**: Premium frosted glass navbar with backdrop blur effects
- **Interactive Project Showcase**: Auto-rotating carousel displaying featured projects with navigation controls
- **Animated Backgrounds**: Canvas-based neuron network (dark mode) and reflective gradient surfaces
- **Token-Driven Design System**: CSS custom properties for consistent theming
- **Mobile Navigation**: Animated hamburger menu with staggered transitions
- **Project Detail Pages**: Dedicated pages for each project with full descriptions, technologies, and learnings
- **Contact Form**: Integrated contact section for direct communication
- **Smooth Animations**: Fade-in effects, hover states, and transition animations
- **Scroll Spy Navigation**: Active navigation highlighting based on scroll position using Intersection Observer API
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

### Frontend
- **React** 19.1.1 - Modern UI library with latest features
- **React Router DOM** 7.9.4 - Client-side routing with nested routes
- **Vite** 7.1.7 - Next-generation frontend tooling with lightning-fast HMR

### Styling
- **Tailwind CSS** 4.1.15 - Utility-first CSS framework
- **CSS Custom Properties** - Design token system for theming
- **Glassmorphism** - Modern UI aesthetic with backdrop filters

### UI Components & Icons
- **Lucide React** 0.545.0 - Beautiful & consistent icon set
- **FontAwesome** - Additional brand and solid icons
- **clsx** - Conditional className utility
- **tailwind-merge** - Intelligent Tailwind class merging

### Development Tools
- **ESLint** 9.36.0 - Code quality and consistency
- **Vite Plugin React** - Fast refresh with automatic JSX runtime

## Architecture

### Architectural Principles

This portfolio follows a **feature-based, scalable architecture** designed for:

1. **Separation of Concerns** - Clear boundaries between UI, logic, and configuration
2. **Component Reusability** - Isolated, composable UI primitives
3. **Predictable Structure** - Intuitive file organization for team collaboration
4. **Scalability** - Easy to extend with new features without structural refactoring
5. **Maintainability** - Consistent patterns reduce cognitive load

### Key Architectural Decisions

#### 1. **Application Bootstrap Layer** (`src/app/`)
Centralizes application initialization, routing, and root-level providers. As the app grows, this becomes home to:
- Global state providers (Redux, React Query)
- Error boundaries
- Authentication wrappers
- Performance monitoring

#### 2. **Component Organization by Responsibility** (`src/components/`)
- **`layout/`** - Persistent structural components (Navbar, Footer)
- **`sections/`** - Large, feature-rich domain sections (Hero, About, Projects)
- **`ui/`** - Reusable, context-free primitives (buttons, toggles, backgrounds)

This structure prevents component sprawl and makes it clear where new components belong.

#### 3. **Custom Hooks Isolation** (`src/hooks/`)
Encapsulates reusable stateful logic separate from components:
- `useTheme` - Theme state management with localStorage persistence
- `useScrollSpy` - Intersection Observer-based scroll tracking

#### 4. **Pure Utility Functions** (`src/lib/`)
Framework-agnostic helper functions that can be unit tested in isolation:
- `utils.js` - Class name utilities (cn function)

#### 5. **Centralized Styling** (`src/styles/`)
Global design tokens, CSS variables, and theme definitions in one location.

#### 6. **Configuration Readiness** (`src/config/`)
Reserved for future environment configs, API endpoints, and feature flags.

### Component Hierarchy

```
App (Root)
├── BrowserRouter
│   └── Routes
│       ├── Route: Home (/)
│       │   ├── ConstructionNotice (Modal overlay - first visit only)
│       │   ├── ThemeToggle (Fixed positioning)
│       │   ├── NeuronBackground (Dark mode only)
│       │   ├── Navbar
│       │   │   └── Mobile Menu (conditional)
│       │   ├── Main Content
│       │   │   ├── HeroSection
│       │   │   ├── AboutmeSection
│       │   │   ├── SkillsSection
│       │   │   ├── ProjectsSection
│       │   │   │   └── Carousel Controls
│       │   │   └── ContactSection
│       │   └── FooterSection
│       │
│       ├── Route: ProjectDetail (/project/:projectId)
│       │   ├── Back Button
│       │   ├── Project Hero Image
│       │   ├── Project Content
│       │   │   ├── Title & Description
│       │   │   ├── Technologies
│       │   │   ├── Key Features
│       │   │   ├── Challenges
│       │   │   └── Learnings
│       │   └── FooterSection
│       │
│       └── Route: NotFound (*)
│           ├── ThemeToggle
│           ├── NeuronBackground
│           ├── Navbar
│           └── 404 Message
```

### State Management

#### Construction Notice State (`ConstructionNotice` component)
- **Storage**: localStorage (`construction-notice-dismissed` key)
- **Values**: `"true"` (dismissed) or `null` (not dismissed)
- **Display Logic**: Shows modal overlay on first visit only
- **Persistence**: Once dismissed, never shows again (per browser/device)
- **Timing**: 500ms delay after page load for smooth appearance
- **Dismissal**: Click anywhere on backdrop, X button, or "Continue Browsing" button

#### Theme State (`useTheme` hook)
- **Storage**: localStorage (`theme` key)
- **Values**: `"light"`, `"dark"`, or `null` (system preference)
- **Initialization**: Inline script in `index.html` prevents flash of unstyled content
- **Persistence**: Changes saved to localStorage immediately
- **Sync**: Updates CSS class on `<html>` element (`dark` class)

#### Scroll State (`useScrollSpy` hook)
- **Technology**: Intersection Observer API
- **Tracking**: Monitors visibility of page sections
- **Output**: Active section ID for navigation highlighting
- **Performance**: Efficient, no scroll event listeners

#### Local Component State
- ConstructionNotice: `isVisible`, `isClosing`
- Navbar: `isScrolled`, `isMobileMenuOpen`
- ProjectsSection: `currentSlide`, `isAutoPlaying`
- ContactSection: Form field values
- AboutmeSection: Visibility state for animations

### Routing Structure

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Main landing page with all sections |
| `/project/:projectId` | ProjectDetail | Individual project showcase |
| `*` | NotFound | 404 error page |

**Route Parameters:**
- `:projectId` - Numeric ID matching project data (1, 2, 3, 4)

**Navigation:**
- Internal: `useNavigate()` hook for programmatic navigation
- External: Hash links (`#hero`, `#about`, etc.) with smooth scroll behavior

## Project Structure

```
my_portifolio/
├── src/
│   ├── app/                      # Application bootstrap
│   │   ├── App.jsx              # Root component with routing
│   │   └── main.jsx             # React DOM entry point
│   │
│   ├── components/               # React components
│   │   ├── layout/              # Persistent layout components
│   │   │   ├── Navbar.jsx       # Main navigation with scroll detection
│   │   │   └── FooterSection.jsx # Footer with links
│   │   │
│   │   ├── sections/            # Page sections (domain-specific)
│   │   │   ├── HeroSection.jsx       # Landing hero with CTA
│   │   │   ├── AboutmeSection.jsx    # Biography section
│   │   │   ├── SkilsSection.jsx      # Skills showcase
│   │   │   ├── ProjectsSection.jsx   # Project carousel
│   │   │   └── ContactSection.jsx    # Contact form
│   │   │
│   │   └── ui/                  # Reusable UI primitives
│   │       ├── ConstructionNotice.jsx # Site construction modal
│   │       ├── ThemeToggle.jsx      # Dark/light mode toggle
│   │       └── NeuronBackground.jsx # Canvas animation
│   │
│   ├── pages/                   # Route-level pages
│   │   ├── Home.jsx            # Main landing page
│   │   ├── ProjectDetail.jsx   # Individual project page
│   │   └── NotFound.jsx        # 404 page
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useTheme.js         # Theme management hook
│   │   └── useScrollSpy.js     # Scroll tracking hook
│   │
│   ├── lib/                     # Utility functions
│   │   └── utils.js            # Class name utilities
│   │
│   ├── styles/                  # Global styles
│   │   └── index.css           # Design tokens & global CSS
│   │
│   └── config/                  # Configuration (future)
│
├── public/                      # Static assets
│   ├── icons/                  # Technology icons
│   │   ├── cursor.png
│   │   ├── figma.png
│   │   ├── framer.png
│   │   ├── git.png
│   │   ├── github.png
│   │   └── vsCode.svg
│   ├── screenshots/            # Project images
│   │   └── CinQ.jpg
│   └── ala.svg                 # Logo/favicon
│
├── dist/                        # Production build output
│
├── index.html                   # HTML entry point
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── tailwind.config.js          # Tailwind configuration
├── package.json                # Dependencies & scripts
└── README.md                   # Documentation
```

## User Flow & Interactions

### 1. Initial Page Load

```
User visits site → index.html loads
                 ↓
Theme script runs (prevent flash)
                 ↓
Checks localStorage for saved theme
                 ↓
Applies theme or detects system preference
                 ↓
React app initializes at main.jsx
                 ↓
App.jsx sets up routing
                 ↓
Home page renders with all sections
                 ↓
Check localStorage for construction-notice-dismissed
                 ↓
If NOT dismissed → Show construction notice (500ms delay)
If dismissed → Skip notice
```

### 2. Construction Notice Flow

```
User sees construction notice modal
                 ↓
Modal appears with fade-in animation
                 ↓
Backdrop blur applied to background
                 ↓
User reads information about site status
                 ↓
User dismisses via:
├── Click backdrop
├── Click X button
└── Click "Continue Browsing" button
                 ↓
Fade-out animation plays (300ms)
                 ↓
localStorage.setItem("construction-notice-dismissed", "true")
                 ↓
Modal removed from DOM
                 ↓
Notice never shows again (this browser/device)
```

### 3. Theme Toggle Flow

```
User clicks theme toggle button
                 ↓
useTheme hook receives toggle event
                 ↓
State updates (dark ↔ light)
                 ↓
Parallel actions:
├── localStorage.setItem("theme", newTheme)
└── document.documentElement.classList.toggle("dark")
                 ↓
CSS variables update automatically
                 ↓
All components re-render with new theme
```

### 4. Navigation Flow

```
User scrolls page OR clicks nav link
                 ↓
Intersection Observer detects section visibility
                 ↓
useScrollSpy updates activeSection state
                 ↓
Navbar highlights active link
                 ↓
User clicks nav link
                 ↓
Smooth scroll to section (#id)
                 ↓
Navbar collapses (if mobile)
```

### 5. Project Interaction Flow

```
User lands on ProjectsSection
                 ↓
Auto-carousel starts (5s interval)
                 ↓
User hovers over carousel
                 ↓
Auto-play pauses
                 ↓
User clicks project card OR navigation arrows
                 ↓
Navigate to /project/:projectId
                 ↓
ProjectDetail page loads with project data
                 ↓
User clicks "Back to Projects"
                 ↓
window.history.back() returns to previous page
```

### 6. Mobile Menu Flow

```
User on mobile device
                 ↓
Sees hamburger icon in Navbar
                 ↓
Clicks hamburger
                 ↓
Mobile menu slides in from right
                 ↓
Staggered fade-in animation for links
                 ↓
User clicks nav link
                 ↓
Scroll to section + menu closes automatically
```

### 7. Contact Form Flow (Future Enhancement)

```
User fills contact form
                 ↓
Client-side validation
                 ↓
Submit button enabled
                 ↓
Form submission (API call)
                 ↓
Loading state shows
                 ↓
Success: Show confirmation message
Error: Show error message + retry
```

### 8. Error Handling Flow

```
User navigates to invalid project ID
                 ↓
ProjectDetail component checks projectsData
                 ↓
No match found
                 ↓
Renders "Project Not Found" message
                 ↓
Provides "Back to Projects" button
                 ↓
                 OR
                 ↓
User navigates to non-existent route
                 ↓
React Router matches "*" route
                 ↓
NotFound component renders
                 ↓
Shows 404 message with Navbar for navigation
```

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn**
- Modern browser with ES6+ support

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/lley-tonn/my_portifolio.git
cd my_portifolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

### Build for Production

```bash
npm run build
```

**Build Output:**
- Location: `dist/` folder
- Optimized assets with minification
- Gzip-compressed bundles
- Typical size: ~125 KB (gzipped JS) + ~12 KB (gzipped CSS)

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing before deployment.

### Managing the Construction Notice

The construction notice is a modal that informs visitors the site is under active development.

**To Clear the Notice (for testing):**
```javascript
// In browser console:
localStorage.removeItem('construction-notice-dismissed');
// Refresh page to see notice again
```

**To Disable the Notice:**
```javascript
// Remove or comment out in src/pages/Home.jsx:
<ConstructionNotice />
```

**To Update Notice Content:**
Edit `/src/components/ui/ConstructionNotice.jsx` to change:
- Message text
- List of incomplete features
- Styling and appearance
- Timing (currently 500ms delay)

**LocalStorage Key:**
- Key: `construction-notice-dismissed`
- Value: `"true"` when dismissed
- Scope: Per browser/device

## Development Guidelines

### Adding New Components

#### 1. UI Component (Reusable)
```bash
# Create in src/components/ui/
touch src/components/ui/Button.jsx
```
Use for: Buttons, modals, cards, inputs, etc.

#### 2. Section Component (Feature-specific)
```bash
# Create in src/components/sections/
touch src/components/sections/TestimonialsSection.jsx
```
Use for: Large page sections with domain logic

#### 3. Layout Component
```bash
# Create in src/components/layout/
touch src/components/layout/Sidebar.jsx
```
Use for: Persistent structural elements

### Adding New Hooks

```bash
# Create in src/hooks/
touch src/hooks/useWindowSize.js
```

**Hook Naming Convention:**
- Prefix with `use` (React convention)
- Descriptive name: `useLocalStorage`, `useDebounce`, `useMediaQuery`

### Adding Utility Functions

```bash
# Add to src/lib/utils.js or create new file
touch src/lib/formatters.js
```

**Utility Guidelines:**
- Pure functions (no side effects)
- Framework-agnostic
- Well-documented with JSDoc comments

### Path Aliases

Vite is configured with `@` alias pointing to `src/`:

```javascript
// Instead of:
import { cn } from "../../lib/utils";

// Use:
import { cn } from "@/lib/utils";
```

**Configured in:** `vite.config.js`

### Code Style

- **2 spaces** for indentation
- **Double quotes** for strings
- **Semicolons** required
- **ESLint** rules enforced
- **Functional components** with hooks

### Git Workflow

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit: `git commit -m "Add your feature"`
3. Push to remote: `git push origin feature/your-feature`
4. Create pull request to `master` branch

## Design System

### Color Tokens

The portfolio uses a semantic color system with CSS custom properties:

#### Light Mode
```css
--background: 224 10% 88%      /* #e0e0e0 - Medium-light gray */
--foreground: 0 0% 13%         /* #222 - Dark text */
--primary: 14 100% 60%         /* #ff6b35 - Brand orange */
--card: 0 0% 94%               /* #f0f0f0 - Card background */
--border: 0 0% 80%             /* Border color */
```

#### Dark Mode
```css
--background: 0 0% 3%          /* #080808 - Near-black */
--foreground: 0 0% 100%        /* #fff - White text */
--primary: 14 100% 60%         /* #ff6b35 - Brand orange */
--card: 0 0% 10%               /* #1a1a1a - Card background */
--border: 0 0% 20%             /* Border color */
```

### Reflection System

Multi-layer gradient backgrounds for cinematic depth:

- **Weak Reflection** - Subtle ambient light
- **Mid Reflection** - Standard depth
- **Strong Reflection** - Maximum visual impact

### Elevation Tokens (Z-index)

```css
--z-background: -1        /* Canvas backgrounds */
--z-neuron: 0            /* Neuron network layer */
--z-content: 1           /* Main content */
--z-navbar: 9999         /* Always on top */
```

### Animation Tokens

| Animation | Duration | Easing | Use Case |
|-----------|----------|--------|----------|
| `float` | 6s | ease-in-out | Floating elements |
| `pulse-subtle` | 4s | ease-in-out | Breathing effect |
| `fade-in` | 0.7s | ease-out | Content reveal |
| `gradient` | 8s | ease-in-out | Animated gradients |
| `blink` | 1s | step-end | Cursor blink |

### Typography Scale

- **Headings**: System font stack (SF Pro, Segoe UI, Roboto)
- **Body**: Sans-serif with fallbacks
- **Code**: Monospace (Fira Code, Consolas)

### Responsive Breakpoints

```css
sm: 640px    /* Mobile landscape */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
2xl: 1536px  /* Extra large */
```

## Performance Optimizations

### 1. Code Splitting
- React Router lazy loading (future enhancement)
- Dynamic imports for heavy components

### 2. Asset Optimization
- Vite's automatic code splitting
- Tree shaking for unused code
- Minification and compression

### 3. Image Optimization
- WebP format with fallbacks (future enhancement)
- Lazy loading for below-fold images
- Responsive image srcsets

### 4. Render Optimization
- React.memo for expensive components (when needed)
- useCallback for event handlers in lists
- Intersection Observer instead of scroll listeners

### 5. Bundle Size
- Current production bundle: ~412 KB (125 KB gzipped)
- CSS bundle: ~95 KB (12 KB gzipped)
- Target: Keep JS under 150 KB gzipped

### 6. Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

## Browser Compatibility

### Supported Browsers

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |

### Required Browser Features

- **ES6+** (Async/await, arrow functions, destructuring)
- **CSS Grid** & **Flexbox**
- **CSS Custom Properties** (CSS variables)
- **Intersection Observer API**
- **LocalStorage API**
- **Canvas API** (for NeuronBackground)
- **Backdrop Filters** (graceful degradation if unsupported)

### Polyfills

No polyfills currently required. Modern browsers (2022+) natively support all features.

## Future Improvements

### Short Term
- [ ] Form validation and email service integration (EmailJS/Formspree)
- [ ] Loading states and skeleton screens
- [ ] Add more project showcases with screenshots
- [ ] Implement progressive image loading
- [ ] Add animations for page transitions

### Medium Term
- [ ] Blog section for technical writing
- [ ] Integrate GitHub API for dynamic repository showcase
- [ ] Add testimonials section
- [ ] Implement search functionality
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Add analytics (Plausible/Google Analytics)

### Long Term
- [ ] CMS integration (Sanity/Contentful) for easy content updates
- [ ] Multilingual support (i18n)
- [ ] Add unit and integration tests (Vitest + React Testing Library)
- [ ] PWA features (offline support, install prompt)
- [ ] Performance monitoring (Web Vitals)
- [ ] A/B testing framework

## Contact

**Portfolio**: https://www.lagenorwoth.site

**LinkedIn**: https://www.linkedin.com/in/lley-tonn

**GitHub**: https://github.com/lley-tonn

**Email**: lagenorwoth@gmail.com

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

---

**Built with** by Agenorwoth Lleyton Adrian | **Last Updated**: January 2026
