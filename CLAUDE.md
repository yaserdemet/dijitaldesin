# DijitalDesin - Agent Guide

## Project Overview
Digital agency website built with React 19, Vite 8, and Tailwind CSS v4. Modern e-commerce integration platform with multiple marketplace support.

## Tech Stack
- **Frontend**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v7
- **Icons**: Iconify/React
- **Fonts**: Google Fonts (Nunito)
- **Dependencies**: 
  - react-fast-marquee (carousels)
  - react-intersection-observer (viewport detection)
  - recharts (analytics charts)

## Project Structure
```
src/
├── pages/           # Route pages (Home, About, Contact, Services, Reference)
├── components/      # Reusable components
│   ├── home/       # Homepage sections (FirstSection, Counts, Testimony, etc)
│   ├── contact/    # Contact form & info components
│   ├── integrations/ # Integration cards & grid
│   └── seo\ ui/    # SEO component
├── layout/         # Navbar, Footer, Layout wrapper
├── assets/         # Images, logos (digi1.png, ticimax-logo.svg, ikas-logo.webp)
└── index.css       # Global styles & animations

```

## Code Standards

### Naming Conventions
- **Components**: PascalCase (e.g., `FirstSection.jsx`, `ReviewCard.jsx`)
- **Files**: PascalCase for components, kebab-case for utilities
- **Props**: camelCase
- **CSS classes**: kebab-case with Tailwind

### Component Patterns
- Functional components with hooks only
- No prop drilling - use composition or context for shared state
- Keep components under 200 lines when possible
- Extract sub-components for complex layouts

### Styling
- **No gradients** - use solid colors from gray/neutral palette only
- **Color palette**: black, white, gray, zinc, green only
- **Typography**: Nunito font throughout
- **Hover effects**: scale + translate-y (not opacity changes)
- **Animations**: CSS keyframes in index.css, Tailwind for timing

### Example Hover Pattern
```jsx
className="hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300"
```

## Performance Guidelines

### Critical Metrics
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Performance Checklist
- ✅ Use React.lazy() + Suspense for route splitting
- ✅ Optimize images (use webp/svg where possible)
- ✅ No unused imports or dependencies
- ✅ Debounce resize/scroll handlers
- ✅ Use `useInView` (from react-intersection-observer) for lazy animations
- ✅ Minimize CSS-in-JS - prefer Tailwind utilities
- ✅ Keep keyframe animations efficient (no complex transforms)

### Animation Performance
- Use `transform` and `opacity` only (GPU accelerated)
- Avoid animating `width`, `height`, `position`
- Keep animation duration reasonable (2-4s for UI, 15-30s for continuous)
- Use `linear` timing for continuous orbits, `ease-in-out` for discrete actions

## Common Patterns

### Infinite Scroll Animation
```jsx
// CSS in index.css
@keyframes scrollUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
}

// JSX
<div className="animate-scroll-up">
  {/* Content duplicated for seamless loop */}
</div>
```

### Hover Scale Effect
```jsx
className="hover:scale-110 hover:-translate-y-1 transition-all duration-300"
```

### Grid with Gradient Mask
```jsx
className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]"
```

### Viewport-based Animation Trigger
```jsx
const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
// Use inView to trigger animations
```

## Recent Fixes to Remember

### SEO Component
- ❌ Don't return `<title>` or `<meta>` tags directly from component
- ✅ Use `useEffect` to set document.title and appendChild meta elements

### Carousel Logos
- ❌ Don't use undefined property names (e.g., "icon" instead of "src")
- ✅ Check both `icon` and `src` properties when rendering

### Counts Component
- ❌ Don't import react-countup as named export
- ✅ Use custom counter with useState/setInterval for full control

### Testimonials/Infinite Scroll
- Animation delays create staggered effect instead of synchronized movement
- Use `animationDelay` for each element: `0s, 0.2s, 0.4s, ...`
- Duplicate content 2-3x for seamless infinite loop

## Testing & QA

### Before Code Review
- [ ] Visual regression on mobile (375px), tablet (768px), desktop (1920px)
- [ ] Check all interactive elements hover/active states
- [ ] Verify animations are smooth (60fps)
- [ ] Test on Chrome, Firefox, Safari
- [ ] Check accessibility: color contrast, keyboard nav
- [ ] Verify images load correctly (especially SVGs)

### Performance Testing
- Run Lighthouse audit (target: 90+ on all metrics)
- Check Network tab for unused assets
- Monitor CLS when scrolling/interacting
- Verify animations don't cause jank

## Git Commit Guide

Use conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `refactor:` Code restructuring (no logic change)
- `style:` CSS/styling only
- `perf:` Performance improvement
- `docs:` Documentation

Example: `feat: add infinite scroll to testimonials section`

## Known Issues & Workarounds
- SVG imports need `?url` query for proper loading: `import TicimaxLogo from "path/logo.svg?url"`
- Tailwind arbitrary values use square brackets: `w-[500px]` not `w-500px`
- CSS custom properties in inline styles use double quotes in className

## Resources
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [React 19 Features](https://react.dev)
- [Iconify React](https://docs.iconify.design/implementations/react/)

---
Last Updated: 2026-08-28
Maintained by: DijitalDesin Team
