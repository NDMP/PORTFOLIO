# Project Context

## Current State

The portfolio is a static, dependency-free personal website located in the project root. It already has the main file structure, a dark premium design system, reusable cards/buttons/badges/timeline primitives, responsive CSS, and vanilla JavaScript interactions.

The completed visible work includes:

- Hero section
- About section
- Skills section
- Featured projects section
- Internship section
- Education section
- Certifications section
- Contact section
- Footer

The portfolio has completed its resume-backed content pass. Any unavailable resume facts are explicitly marked as not listed in the resume or represented by disabled actions.

## Existing Files

- `index.html`: Main portfolio markup.
- `css/style.css`: Design tokens, base styles, components, section styles, timeline styles, and utility classes.
- `css/animations.css`: Animation and reveal styles.
- `css/responsive.css`: Breakpoint-specific layout refinements.
- `js/script.js`: Navigation, scrolled header state, typing effect, parallax, and project card expansion.
- `js/animations.js`: Scroll reveal behavior.
- `assets/resume/`: Resume asset location.
- `assets/icons/favicon.svg`: Favicon placeholder.
- `README.md`: Basic project overview and structure.
- `AI_RULES.md`: Project-specific AI collaboration rules.

## Existing Design Language

The portfolio uses:

- Dark background and glass-like surfaces.
- Soft borders and restrained shadows.
- Light text with blue accent highlights.
- Rounded cards and pill badges.
- Responsive grid layouts.
- Mobile-first navigation with a hamburger toggle.
- Subtle motion through reveal effects, typing text, parallax, and card hover states.

## Existing Component Patterns

Prefer these existing patterns when adding unfinished sections:

- `.section`
- `.container`
- `.flow`
- `.grid`
- `.grid--auto`
- `.section-header`
- `.section-title`
- `.section-subtitle`
- `.eyebrow`
- `.card`
- `.card--interactive`
- `.badge`
- `.tag`
- `.timeline`
- `.timeline-item`
- `.timeline-card`
- `.cluster`
- `.reveal`
- `.stagger`

## JavaScript Behavior

Current JavaScript supports:

- Mobile navigation open/close.
- Closing mobile navigation after link selection.
- Closing navigation with Escape.
- Header visual state after scroll.
- Hero typing animation.
- Pointer-based parallax with reduced-motion handling.
- Expand/collapse behavior for featured project detail panels.

New work should avoid adding JavaScript unless the section genuinely needs interaction.

## Content Notes

Current portfolio content is resume-backed where the resume provides information. Missing resume details should not be invented; use clear unavailable-state text or disabled actions instead.

## Working Agreement

- Read `PROJECT_SPEC.md`, `CONTEXT.md`, `TODO.md`, and `CHANGELOG.md` before making future changes.
- Complete only the next unfinished task.
- Do not modify completed sections unless the task explicitly requires a minor content replacement and does not alter design.
- Update `CHANGELOG.md` after completing future tasks.
