# Project Specification

## Project Overview

This project is a premium personal portfolio website built with HTML5, CSS3, and vanilla JavaScript. The portfolio uses a modern dark theme, responsive layouts, accessible markup, and mobile-first styling.

The site currently presents a polished foundation with completed core sections and reusable UI primitives for the remaining resume-based sections.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Restrictions

- Do not use React.
- Do not use Bootstrap.
- Do not use Tailwind.
- Do not use jQuery.
- Do not redesign completed sections.
- Follow the existing architecture, naming conventions, design tokens, spacing, and component patterns.

## Design Style

- Premium
- Modern
- Dark theme
- Responsive
- Accessible
- Mobile first

## Architecture

The project is a static portfolio with separated concerns:

- `index.html` contains semantic page structure and section markup.
- `css/style.css` contains design tokens, base styles, reusable layout primitives, components, and section styles.
- `css/animations.css` contains animation and reveal behavior.
- `css/responsive.css` contains responsive layout refinements.
- `js/script.js` contains navigation, header state, typing effect, parallax behavior, and project details interactions.
- `js/animations.js` contains scroll reveal animation support.
- `assets/` contains images, icons, and resume assets.
- `assets/icons/favicon.svg` contains the current favicon placeholder.
- `AI_RULES.md` contains project-specific AI collaboration rules.

## Completed Sections

- Project structure
- Design system
- Architecture
- Hero section
- About section
- Skills section
- Featured projects section
- Internship section
- Education section
- Certifications section
- Contact section
- Footer
- Production optimization pass

## Current Section State

### Hero

Completed. Includes a fixed header, mobile navigation toggle, animated typing text, primary calls to action, abstract interface visual, parallax elements, and scroll indicator.

### About

Completed. Includes initials portrait, focus badges, professional summary, highlight cards, and fact cards.

### Skills

Completed. Includes categorized skill cards for programming languages, frontend, backend, databases, tools/platforms, and currently learning.

### Featured Projects

Completed. Includes two responsive featured project cards with technology badges, project actions, and expandable details.

### Internship

Completed. Includes resume-based internship entries for JB Soft System and Elevate Labs. JB Soft System technologies are marked as not listed in the resume.

### Education

Completed. Includes MCA, B.Sc., and HSC education entries with institution, duration, and CGPA or percentage.

### Certifications

Completed. Includes resume-listed certification, SQL developer internship credential, and paper publication detail. Certificate links are unavailable, so disabled actions are used.

### Contact

Completed. Includes email, LinkedIn, GitHub, and resume download actions.

### Footer

Completed. Includes name, quick navigation, GitHub, LinkedIn, email, copyright, and build credit.

### Production Optimization

Completed. Includes metadata, Open Graph tags, favicon placeholder, basic CSS cleanup, accessibility review, syntax checks, and headless browser load checks.

## Accessibility Requirements

- Preserve semantic landmarks: header, nav, main, section, footer.
- Preserve accessible labels, `aria-labelledby`, `aria-expanded`, and `aria-hidden` patterns.
- Keep keyboard interaction working for navigation and expandable project cards.
- Preserve reduced-motion handling where motion effects are used.
- Maintain visible focus states.

## Implementation Rules

- Complete only the next unfinished task from `TODO.md`.
- Do not redesign completed sections.
- Reuse existing classes and components before adding new styles.
- Keep changes scoped to the section being worked on.
- Maintain mobile-first responsive behavior.
- Keep the portfolio static and dependency-free.
