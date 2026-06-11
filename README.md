# BRAVION MOTORS — Brutalist Automotive Editorial

A premium, high-end, multi-page website built with **Angular** for the uncompromising automotive engineering group **Bravion Motors**. The design draws inspiration from a blend of brutalist editorial magazine spreads, architectural portfolios, and high-fashion streetwear aesthetics.

## Design Identity

- **Color Palette**: Restricted to dark black (`#0a0a0a` background), pure white (`#ffffff`), and a single aggressive accent red (`#e50000`).
- **Typography**: Editorial header typography (*Syne*) paired with minimalist technical monospaced body text (*Space Grotesk*).
- **Cinematic whitespace**: Massive viewports containing only single focal lines or geometric drawings.
- **Abstract Geometry**: Rejects traditional stock photography templates. Vehicles and engineering elements are represented entirely in custom SVG line art and architectural silhouettes.
- **Grain Overlay**: A fine, organic turbulence noise SVG overlay applied globally.
- **Custom Trailing Pointer**: A smooth, 60fps linear-interpolated (`lerp`) red dot cursor that transforms dynamically and inverts blending on interactive elements.
- **Grid Layout**: Features subtle dark grid line systems on technical pages (Servicing & Garage).

---

## Project Structure

```
Bravion Motors/
├── public/                    # Static assets
│   ├── .gitkeep
│   └── images/                # Asset storage folder
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── cursor/        # Trailing 60fps cursor
│   │   │   └── navbar/        # Brutalist responsive header (no hamburger)
│   │   ├── directives/
│   │   │   └── animate-on-scroll.directive.ts   # Scroll reveal and count-up directive
│   │   ├── pages/
│   │   │   ├── home/          # Hero, Manifesto (fully red page), Route Hub
│   │   │   ├── yard/          # Horizontal snap scroll car yard inventory
│   │   │   ├── service/       # Service disciplines and count-up stats on grid
│   │   │   └── parts/         # Engine component layouts & mechanical drawings
│   │   ├── app.component.ts   # Layout master
│   │   ├── app.config.ts      # App setup (Scroll restoration)
│   │   └── app.routes.ts      # Multi-page routing map
│   ├── index.html             # Bootstrapping shell
│   ├── main.ts                # App entrypoint
│   └── styles.css             # Design tokens and scroll snap rules
├── angular.json               # Angular CLI configuration
├── package.json               # Node packages
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

---

## Getting Started

### 1. Install Dependencies
Run the package installer to download the necessary Angular frameworks:
```bash
npm install
```

*Note: Ensure you have at least 300MB of free space on your system drive before running.*

### 2. Run Locally
Start the development server:
```bash
npm run start
```
Once started, navigate to `http://localhost:4200/` in your browser.

### 3. Production Build
Compile the optimized production bundle:
```bash
npm run build
```
The output will be stored in the `dist/bravionmotors` folder, ready for static hosting on Vercel, Netlify, or Github Pages.
