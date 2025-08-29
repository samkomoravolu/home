# Sameer Komoravolu - Personal Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Dark Mode Design** - Modern gradient background with elegant styling
- ✨ **Smooth Animations** - Powered by Framer Motion for engaging interactions
- 📱 **Responsive Layout** - Works perfectly on desktop and mobile devices
- 🚀 **Fast Performance** - Built with Vite for optimal development experience

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Fast build tool and dev server

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd MySite
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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
MySite/
├── src/
│   ├── main.tsx          # React entry point
│   ├── index.css         # Global styles with Tailwind
│   └── MagicalResume.tsx # Main component
├── Images/               # Static images
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Customization

- Update personal information in `src/MagicalResume.tsx`
- Modify styling in `src/index.css` or component files
- Add new images to the `Images/` directory
- Update experience data in the `experiences` array

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## License

This project is open source and available under the [MIT License](LICENSE).
