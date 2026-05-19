# مدرسة الغد الخاصة | Al Ghad Private School

A bilingual (Arabic/English) institutional website for Al Ghad Private School in Sohar, Sultanate of Oman. Built with React 19, Vite 8, and Tailwind CSS 3.

## Features

- **Hero Slider** — Full-screen hero with rotating slides and gradient overlay
- **Quick Links** — Icon-based navigation grid to key sections
- **School Vision & Message** — Core values and educational philosophy
- **Curriculum** — Overview of religious, cultural, and literary education tracks
- **Photo Gallery** — Grid layout with lightbox modal
- **Video Showcase** — Embedded video section for promotional content
- **Licenses** — Display of official accreditation documents
- **Testimonials** — Student, parent, and teacher reviews with star ratings
- **FAQ Accordion** — Collapsible questions and answers
- **Application Process** — Admission terms, requirements, and image slider
- **Contact Form** — Functional form with validation and success feedback
- **Newsletter Subscription** — Email signup with confirmation
- **Footer** — School info, social media links, contact details, and copyright
- **Responsive Design** — Full responsiveness across mobile, tablet, and desktop
- **RTL Support** — Right-to-left layout for Arabic content
- **Page Routing** — Home, About, Contact, and Graduates pages
- **SEO** — Dynamic meta tags via `react-helmet-async`
- **Scroll Animations** — Framer Motion `whileInView` entrance animations

## Tech Stack

| Layer          | Technology                          |
| -------------- | ----------------------------------- |
| Framework      | React 19                            |
| Build Tool     | Vite 8                              |
| Styling        | Tailwind CSS 3                      |
| Routing        | React Router DOM 7                  |
| Animations     | Framer Motion 12                    |
| Icons          | React Icons 5                       |
| SEO            | React Helmet Async                  |
| Linting        | ESLint 10                           |
| Font           | Noto Sans Arabic (Google Fonts)     |

## Project Structure

```
src/
├── App.jsx                 # Root component with routing
├── main.jsx                # Entry point (BrowserRouter, HelmetProvider)
├── index.css               # Tailwind directives & custom utilities
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx      # Responsive navigation bar
│   │   └── Footer.jsx      # Site footer with contact/social info
│   ├── ui/
│   │   ├── Button.jsx      # Reusable button (primary/gold/outline/white)
│   │   ├── Card.jsx        # Reusable card wrapper
│   │   ├── SectionHeading.jsx  # Section title with gold highlight
│   │   └── ScrollToTop.jsx # Scroll-to-top on route change
│   ├── Hero.jsx            # Full-screen hero slider
│   ├── QuickLinks.jsx      # Quick access icon grid
│   ├── SchoolVision.jsx    # Vision section with videos
│   ├── SchoolMessage.jsx   # Mission statement
│   ├── SchoolAims.jsx      # Educational goals
│   ├── Curriculum.jsx      # Curriculum overview
│   ├── Gallery.jsx         # Image gallery with lightbox
│   ├── Licenses.jsx        # Accreditation documents
│   ├── Testimonials.jsx    # Reviews slider
│   ├── FAQ.jsx             # Accordion FAQ
│   ├── Application.jsx     # Admission process slider
│   ├── ContactForm.jsx     # Contact form with validation
│   └── Newsletter.jsx      # Email subscription
├── pages/
│   ├── Home.jsx            # Landing page (composes all sections)
│   ├── About.jsx           # About page with videos & curriculum
│   ├── Contact.jsx         # Contact info page
│   └── Graduates.jsx       # Graduates page
└── data/
    └── content.js          # All static content in one file
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` by default.

### Build

```bash
npm run build
```

Outputs production files to `dist/`.

### Preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start development server     |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview production build     |
| `npm run lint`    | Run ESLint                   |

## Customization

All content (text, images, phone numbers, social links, testimonials, FAQ items) is centralized in `src/data/content.js`. Edit this file to update the site content without touching component code.

### Colors

Custom color palette defined in `tailwind.config.js`:

- **Primary** — Navy blue shades (`#12385b` → `#061525`)
- **Gold** — Accent gold (`#d4a843` → `#b07d1a`)

### Font

Noto Sans Arabic is loaded via Google Fonts. Fallback stack: `system-ui, sans-serif`.
