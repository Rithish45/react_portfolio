# Engineering Portfolio Architecture

This repository holds the high-performance, component-based React migration of the S.R. Rithish Barath portfolio. The project was fundamentally restructured from a standard HTML/CSS layout into a robust Vite React Application focused on render optimization, complex declarative animations, and modular architecture.

## Architectural Upgrades

### 1. React Component Componentization
- **Modular Ecosystem:** Replaced the legacy DOM-manipulation architecture with an isolated component tree (`App.jsx`, `Card.jsx`, `SpaceEngine.jsx`).
- **Build Tooling:** Migrated entirely to the Vite bundler ecosystem to provide lightning-fast Hot Module Replacement (HMR) and an aggressively minified production bundle.
- **Dependency Management:** Implemented structured dependency tracking (`package.json`) resolving missing SVG iconography dependencies with standard `lucide-react` scalable vectors.

### 2. High-Performance Render Methodologies
- **Ref-Based DOM Mutators:** Rebuilt the "Hardware Light Simulation" edge effect over the Titanium constraint cards. Instead of standard React state variables triggering consecutive tree re-renders per mouse coordinate change, we utilize `useRef` directly injecting CSS custom variables (`--mouse-x`) to force repaint at 60fps without touching React reconciliation logic. 
- **Animation Loop Encapsulation:** Bound the 1500-node Space Engine canvas into a strict `useEffect` lifecycle with `requestAnimationFrame` boundaries and automatic memory cleanup vectors, preventing memory leak cascades on unmounts.

### 3. Kinematic Viewport Engine
- **Declarative Parallax:** Eradicated the standard CSS grid/flex box configurations representing projects and abstracted the flow into a heavy Parallax cinematic pipeline.
- **Framer Motion Intercepts:** Relied purely on `IntersectionObserver` via Framer Motion's `useInView` and `useScroll` to trigger mathematical entry thresholds (`ease: [0.16, 1, 0.3, 1]`) matching industry-standard UX guidelines, eliminating costly scroll-event-listener loops. 
- **Style Isolation:** Maintained rigorous Titanium/Matte Glass structural CSS (`index.css`) integrating radial `.bg-noise` without layout thrashing. 

## Local Development Initialization

To run the pipeline locally:
```bash
# Install package binaries
npm install

# Initialize development host server
npm run dev
```

## Deployment Configuration
Automated deploy scripts are anchored to GitHub Actions via the `gh-pages` branch. Executing the build/deploy configuration automatically pushes heavily minified transpiled JavaScript to the primary edge node layout.

```bash
# Deploys production bundle dynamically
npm run deploy
```
