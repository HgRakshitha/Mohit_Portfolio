# Mohit Kumar Pal - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (mobile-first approach)
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 🌙 Dark theme with glassmorphism effects
- 📄 Showcases education, experience, projects, and skills
- 🏆 Achievements section
- 📧 Contact information

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Scroll Animations**: React Intersection Observer

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This portfolio can be easily deployed on:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any platform supporting Node.js

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Experience section
│   ├── Projects.tsx     # Projects section
│   ├── Skills.tsx       # Skills section
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer component
└── public/              # Static assets
```

## Customization

To customize the portfolio with your own information:

1. Update content in respective component files
2. Modify colors in `tailwind.config.js`
3. Update metadata in `app/layout.tsx`
4. Replace resume PDF if needed

## License

This project is open source and available under the MIT License.

