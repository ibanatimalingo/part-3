# Apex Auto Designs — Website

A custom car design studio website for **Apex Auto Designs**, built with HTML, CSS, and JavaScript. The site showcases bespoke vehicle builds, services, and allows potential clients to enquire about projects or get in touch directly.

---

## 🌐 Live Site

> Add your deployed link here once published (e.g. Netlify, GitHub Pages):
> `https:/ibanatimalingo5@gmail.com.github.io/apex-auto-designs/`

---

## 📁 Project Structure

```
apex-auto-designs/
│
├── index.html              # Homepage — hero, about strip, features, CTA
├── about.html               # About page
├── services.html             # Services page
├── enquiry.html              # Service enquiry form (Part 3)
├── contact.html              # General contact form (Part 3)
│
├── styles.css               # Global stylesheet (Part 2)
│
├── js/
│   ├── script.js             # Shared site scripts (nav toggle, etc.)
│   ├── enquiry.js            # Enquiry form validation + dynamic response (Part 3)
│   └── contact.js            # Contact form validation + email compilation (Part 3)
│
├── images/                  # Vehicle and brand imagery
│
└── README.md                # This file
```

---

## ✨ Features Implemented

### Part 1 — Site Structure & Content
- Multi-page site (Home, About, Services, Contact) with shared header/footer navigation.
- Responsive hamburger menu for mobile.
- Hero section, "Why Apex?" feature cards, and call-to-action sections.

### Part 2 — CSS Styling
- Bold, modern dark-themed design system reflecting the automotive/performance brand identity.
- Custom variables for colors, spacing, and typography.
- Responsive grid layouts for feature cards and content sections.
- Hover states and smooth transitions across buttons, cards, and nav links.

### Part 3 — Functionality, Forms & SEO
- **`enquiry.html`** — Service enquiry form for prospective clients:
  - Collects name, email, phone, service type, car make/model, budget, and timeline.
  - Client-side JavaScript validation (required fields, email format, SA phone number format, minimum description length).
  - On valid submission, dynamically generates a response showing estimated cost, availability, and project duration based on the selected service — no page reload required.
- **`contact.html`** — General contact form:
  - Collects name, email, phone, message type, subject, and message (with live character counter).
  - JavaScript validation with inline error messages.
  - Compiles validated input into a pre-filled email (via `mailto:`) addressed to the studio's contact address.
- **Form Validation (JavaScript)**:
  - Real-time validation on blur/change events.
  - Visual error states (red border + inline error text).
  - Submit button disables during processing to prevent duplicate submissions.
- **SEO Improvements**:
  - Unique `<title>` and `<meta name="description">` tags per page.
  - `<meta name="keywords">` and `<meta name="robots">` tags added.
  - Open Graph (`og:title`, `og:description`, `og:type`, `og:url`) tags for social sharing.
  - Descriptive `alt` text on all images for accessibility and image SEO.
  - Semantic HTML structure (`<header>`, `<nav>`, `<section>`, `<footer>`) for clean heading hierarchy.

---

## 🛠️ Technologies Used

- **HTML5** — semantic page structure
- **CSS3** — custom properties, Flexbox, Grid, responsive media queries
- **JavaScript (Vanilla)** — form validation, dynamic content, DOM manipulation

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/apex-auto-designs.git
   ```
2. Open `index.html` in your browser — no build tools or dependencies required.
3. To test forms locally, open `enquiry.html` or `contact.html` directly.

---

## 📋 Changelog

### Part 3 Updates
- Added `enquiry.html` with a full service enquiry form and dynamic, service-specific response (cost estimate, availability, duration).
- Added `contact.html` with a general contact form and `mailto:` email compilation.
- Created `js/enquiry.js` — handles validation and dynamic response logic for the enquiry form.
- Created `js/contact.js` — handles validation, character counting, and email compilation for the contact form.
- Added SEO meta tags (description, keywords, robots, Open Graph) to all new pages.
- Updated navigation across all pages to include links to `enquiry.html` and `contact.html`.

### Part 2 Updates
- Built out `styles.css` with the full design system: colors, typography, buttons, cards, nav, hero, and footer styles.
- Made layout fully responsive across desktop, tablet, and mobile breakpoints.

### Part 1 (Initial Build)
- Created initial site structure: `index.html`, `about.html`, `services.html`, `contact.html`.
- Added base navigation, hero section, and feature cards.

---

## 📄 License

This project was created for educational purposes as part of a web development assignment.
