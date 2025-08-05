# Automatika - AI Solutions Landing Page

A modern, responsive landing page for Automatika AI Solutions built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal performance
- **TypeScript**: Full TypeScript support for better development experience
- **Component Library**: Uses shadcn/ui components for consistent design

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd automatika-ai-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── HeroSection.tsx # Hero section
│   ├── FeaturesSection.tsx # Features showcase
│   ├── WhyChooseUsSection.tsx # Why choose us
│   ├── VisionToImpactSection.tsx # Project showcase
│   ├── CallToActionSection.tsx # Contact section
│   └── Footer.tsx      # Footer
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets
└── App.tsx             # Main app component
```

## Customization

### Colors and Themes

The project uses CSS custom properties for theming. You can modify colors in `src/index.css`:

```css
:root {
  --primary: 210 85% 55%;    /* Blue */
  --secondary: 160 85% 55%;  /* Green */
  --background: 215 30% 8%;  /* Dark background */
  /* ... other colors */
}
```

### Content

Update the content in the respective component files:
- `Header.tsx` - Navigation and branding
- `HeroSection.tsx` - Main hero content
- `FeaturesSection.tsx` - Feature descriptions
- `WhyChooseUsSection.tsx` - Benefits list
- `VisionToImpactSection.tsx` - Project showcase
- `CallToActionSection.tsx` - Contact information

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to Netlify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
