# Structural Engineering: My Personal Portfolio

This repository holds my high-performance, component-based React portfolio. I fundamentally restructured my original HTML/CSS layout into a robust Vite React Application, specifically engineering it for render optimization, complex declarative animations, and modular scale.

## Architectural Upgrades I Implemented

### 1. React Component Architecture
- **Modular Ecosystem:** I replaced my legacy DOM-manipulation architecture with a strictly isolated component tree (`App.jsx`, `Card.jsx`, `SpaceEngine.jsx`).
- **Build Tooling:** I migrated entirely to the Vite bundler ecosystem to provide lightning-fast Hot Module Replacement (HMR) and an aggressively minified production bundle.
- **Dependency Management:** I integrated `lucide-react` for scalable, crisp vector iconography, managing dependencies dynamically via `package.json`.

### 2. High-Performance Render Methodologies
- **Ref-Based DOM Mutators:** I custom-built the "Hardware Light Simulation" effect over my constraint cards. Instead of standard React state variables triggering massive re-renders across the tree when the mouse moves, I utilized `useRef` to directly inject CSS custom variables (`--mouse-x`). This forces a repaint at 60fps without touching React's reconciliation logic. 
- **Animation Loop Encapsulation:** I bound the 1500-node Space Engine canvas into a strict `useEffect` lifecycle with `requestAnimationFrame` boundaries, writing automatic memory cleanup vectors to prevent memory leak cascades on unmounts.

### 3. Kinematic Viewport Engine
- **Declarative Parallax:** I eradicated the standard responsive constraints and abstracted the visual flow into a heavy cinematic Parallax pipeline.
- **Framer Motion Intercepts:** I chose to rely purely on `IntersectionObserver` via Framer Motion's `useInView` and `useScroll`. I mapped entry thresholds (`ease: [0.16, 1, 0.3, 1]`) matching industry-standard UX guidelines, completely eliminating the lag of costly vanilla scroll-event-listeners. 
- **Style Isolation:** Maintained rigorous Titanium/Matte Glass structural CSS (`index.css`), successfully integrating radial `.bg-noise` without layout thrashing. 

## Local Development Initialization

If you want to clone and run my pipeline locally:
```bash
# Install package binaries
npm install

# Initialize development host server
npm run dev
```

## Deployment Configuration
I mapped automated deploy scripts to GitHub Actions via the `gh-pages` branch. Executing this strictly pushes a minified JS/CSS bundle array to my live edge node:

```bash
# Deploys production bundle dynamically
npm run deploy
```
