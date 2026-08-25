# Lumière Weddings – React Project

## Setup & Run

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Tech Stack
- React 18 + React Router v6
- Vite build tool
- CSS Modules (per-component CSS files)
- Font Awesome 6 via CDN (loaded in index.html)
- Google Fonts: Playfair Display + Poppins (via CDN)

## Features
- 6 fully coded pages: Home, About, Services, Gallery, Testimonials, Contact
- Dark / Light mode with localStorage persistence
- Animated hero with floating petals
- Masonry gallery with category filter + lightbox
- Auto-sliding testimonials carousel
- Booking modal with form + success state
- Contact form with validation
- Floating Book Now button (all pages)
- Back-to-top button
- Scroll reveal animations
- Gold stats bar
- Process steps on Services page
- Team section on About page
- Fully responsive (mobile / tablet / desktop)
- Font Awesome icons throughout

## Folder Structure
```
src/
├── App.jsx
├── main.jsx
├── assets/data/index.js        ← All content data
├── context/ThemeContext.jsx
├── hooks/useScrollReveal.js
├── styles/global.css
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Hero/
│   ├── Stats/
│   ├── ServiceCard/
│   ├── TestimonialCard/
│   ├── GalleryGrid/
│   ├── BookingModal/
│   ├── FloatBookBtn/
│   ├── BackToTop/
│   ├── Loader/
│   ├── PageHeader/
│   └── CTASection/
└── pages/
    ├── Home/
    ├── About/
    ├── Services/
    ├── Gallery/
    ├── Testimonials/
    └── Contact/
```
