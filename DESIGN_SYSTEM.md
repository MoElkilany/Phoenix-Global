# Phoenix Global — Desert Modernism Design System 2025

## Overview

A complete visual transformation from dark luxury to **light-mode desert modernism** — inspired by Aman Resorts, Sotheby's International Realty, and architectural digest aesthetics.

## Design Philosophy

**"Warm Minimalism Meets Architectural Precision"**

- **Light-mode first**: Rare in real estate, creates airy, premium feel
- **Desert palette**: Warm sand tones with terracotta accents and bronze highlights
- **Editorial layouts**: Magazine-inspired compositions with generous white space
- **Typography-driven**: Playfair Display + Amiri for luxury, IBM Plex Sans Arabic for readability
- **Subtle motion**: Elegant reveals, parallax depth, no aggressive animations

---

## Color System

### Primary Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-sand-50` | #FDFCFB | Base surface |
| `--color-sand-100` | #F9F7F5 | Subtle backgrounds |
| `--color-sand-200` | #F2EFEA | Cards, hover states |
| `--color-sand-300` | #E8E4DD | Borders, dividers |
| `--color-sand-400` | #D9D4CC | Secondary borders |
| `--color-sand-500` | #C5BEB3 | Muted text |
| `--color-sand-600` | #A8A094 | Tertiary text |
| `--color-sand-700` | #8C8476 | Secondary text |
| `--color-sand-800` | #6D665C | Headings |
| `--color-sand-900` | #4A443D | Primary text |
| `--color-sand-950` | #2D2A26 | Footer, dark accents |

### Accent: Terracotta

| Token | Value | Usage |
|-------|-------|-------|
| `--color-terracotta-50` | #FEF9F7 | Hover backgrounds |
| `--color-terracotta-100` | #FDEFE9 | Icon backgrounds |
| `--color-terracotta-200` | #FADFD3 | Selection highlight |
| `--color-terracotta-300` | #F5C6B1 | Borders |
| `--color-terracotta-400` | #EDA585 | Hover states |
| `--color-terracotta-500` | #E07F58 | Icons, badges |
| `--color-terracotta-600` | #C9613A | **Primary CTA** |
| `--color-terracotta-700` | #A84B2B | Hover CTAs |
| `--color-terracotta-800` | #8B3F28 | Active states |
| `--color-terracotta-900` | #733626 | Pressed |

### Accent: Bronze (Luxury)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bronze-400` | #E0B896 | Gradient end |
| `--color-bronze-500` | #D19A6B | **Luxury accent** |
| `--color-bronze-600` | #B87D4D | Gradient start |
| `--color-bronze-700` | #96623F | Hover bronze |

### Neutral: Charcoal

| Token | Value | Usage |
|-------|-------|-------|
| `--color-charcoal-900` | #2A2A2E | **Primary buttons** |
| `--color-charcoal-800` | #333339 | Button hover |
| `--color-charcoal-700` | #3D3D44 | Headings |

---

## Typography

### Font Stack

```css
--font-display: 'Playfair Display', serif;     /* Luxury headlines */
--font-heading: 'Amiri', serif;                /* Arabic headings */
--font-body: 'Inter', 'IBM Plex Sans Arabic', sans-serif;  /* Body text */
--font-arabic: 'IBM Plex Sans Arabic', sans-serif;  /* Arabic body */
```

### Scale

| Token | Size | Usage |
|-------|------|-------|
| `--text-display` | clamp(3.5rem, 8vw, 7rem) | Hero headlines |
| `--text-h1` | clamp(2.5rem, 5vw, 4.5rem) | Section titles |
| `--text-h2` | clamp(2rem, 4vw, 3.25rem) | Subheadings |
| `--text-h3` | clamp(1.5rem, 2.5vw, 2.25rem) | Card titles |
| `--text-h4` | clamp(1.25rem, 1.75vw, 1.5rem) | Small headings |
| `--text-body-lg` | 1.125rem | Lead paragraphs |
| `--text-body` | 1rem | Body text |
| `--text-body-sm` | 0.875rem | Buttons, captions |
| `--text-caption` | 0.75rem | Fine print |
| `--text-overline` | 0.6875rem | Badges, labels |

### Line Heights

- Tight: 1.2 (headlines)
- Normal: 1.5 (body)
- Relaxed: 1.75 ( editorial)
- Loose: 2 (quotes)

---

## Components

### Buttons

#### Primary (Charcoal)
```jsx
<button className="btn-primary">Action</button>
```
- Background: `var(--color-charcoal-900)`
- Color: White
- Hover: Lift + shadow

#### Terracotta CTA
```jsx
<button className="btn-terracotta">Primary Action</button>
```
- Background: `var(--color-terracotta-600)`
- Color: White
- Hover: Lift + terracotta shadow

#### Outline
```jsx
<button className="btn-outline">Secondary</button>
```
- Border: 1.5px solid charcoal
- Hover: Fill charcoal, white text

#### Ghost
```jsx
<button className="btn-ghost">Tertiary</button>
```
- Transparent background
- Hover: Sand-100 background

---

### Cards

#### Elevated
```jsx
<div className="card-elevated">Content</div>
```
- White background
- Subtle border
- Shadow on hover
- Lift animation

#### Subtle
```jsx
<div className="card-subtle">Content</div>
```
- Sand-100 background
- No border
- Minimal hover

---

### Section Badge
```jsx
<div className="section-badge">
  <span className="material-symbols-outlined">icon</span>
  <span>Label</span>
</div>
```
- Rounded full pill
- Sand-100 background
- Overline typography
- Wide letter-spacing

---

## Motion System

### Durations
- Instant: 75ms (micro-interactions)
- Fast: 150ms (buttons, links)
- Normal: 250ms (cards, reveals)
- Slow: 400ms (panels, modals)
- Slower: 600ms (hero transitions)
- Cinematic: 1000ms (page loads)

### Easing
- Default: `cubic-bezier(0.4, 0, 0.2, 1)`
- Elegant: `cubic-bezier(0.16, 1, 0.3, 1)` ← **Signature Phoenix easing**
- Spring: `cubic-bezier(0.22, 1, 0.36, 1)`

### Animations
- `animate-fade-in-up`: Reveal on scroll
- `animate-float`: Subtle floating
- `stagger-reveal`: Sequential reveals (use with `.stagger-1` to `.stagger-6`)

---

## Layout Principles

### Spacing
- 8pt grid system
- Generous padding: `py-32` (128px) for sections
- Container max-width: 7xl (80rem / 1280px)

### Grid
- Editorial 12-column grid (desktop)
- 8-column (tablet)
- Single column (mobile)

### Hierarchy
1. Hero: Full viewport height
2. Sections: 32rem padding vertical
3. Cards: Consistent 8px borders
4. Dividers: Gradient fades

---

## Visual Details

### Shadows
```css
--shadow-sm: 0 2px 4px rgba(45, 42, 38, 0.06);
--shadow-md: 0 4px 12px rgba(45, 42, 38, 0.08);
--shadow-lg: 0 8px 24px rgba(45, 42, 38, 0.1);
--shadow-xl: 0 12px 48px rgba(45, 42, 38, 0.12);
--shadow-2xl: 0 20px 64px rgba(45, 42, 38, 0.15);
```

### Borders
- Subtle: `#E8E4DD`
- Default: `#D9D4CC`
- Strong: `#C5BEB3`
- Accent: `#D19A6B` (bronze)

### Radius
- None: 0
- Sm: 2px
- Md: 4px
- Lg: 8px
- Xl: 12px
- 2xl: 16px
- 3xl: 24px
- 4xl: 32px
- Full: 9999px

---

## Image Treatment

### Hover Reveal
```jsx
<div className="img-reveal">
  <img src="..." />
</div>
```
- Scale 1.08 on hover
- Smooth 600ms transition

### Aspect Ratios
- Hero: Full viewport
- Property cards: 4:3
- Thumbnails: 1:1

---

## Accessibility

- Focus visible: 2px terracotta outline
- Selection: Terracotta-200 background
- Scrollbar: 6px width, sand colors
- RTL: Full Arabic support

---

## File Structure

```
src/
├── index.css              ← Design tokens + utilities
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── WhyChooseUs.jsx
│   ├── FeaturedProjects.jsx
│   ├── Investment.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   ├── WhatsAppButton.jsx
│   └── Footer.jsx
└── App.jsx
```

---

## What Changed from Previous Design

| Before | After |
|--------|-------|
| Dark navy background (#060B14) | Light sand base (#FDFCFB) |
| Gold accent (#C9A84C) | Terracotta (#C9613A) + Bronze (#D19A6B) |
| Cinzel font | Playfair Display + Amiri |
| Heavy overlays on images | Light gradient overlays |
| Dark cards with gold borders | White cards with subtle shadows |
| Aggressive animations | Elegant, slow reveals |
| Dense layouts | Generous white space |
| Symmetrical grid | Editorial, asymmetrical compositions |

---

## Usage Guidelines

### DO
- Use terracotta for primary CTAs only
- Maintain generous spacing
- Use Playfair Display for English headlines
- Use Amiri for Arabic headlines
- Apply stagger-reveal for sequential animations
- Keep backgrounds light and airy

### DON'T
- Use dark backgrounds (except footer)
- Use gold as primary accent
- Use generic fonts (Arial, Cairo)
- Add heavy shadows
- Use aggressive animations
- Clutter layouts

---

**Built with Tailwind CSS v4 + React 19**

**Design Direction: Desert Modernism 2025**
