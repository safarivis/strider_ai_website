# Strijder AI Website

## Overview
Modern, responsive website for Strijder AI, built with React, TypeScript, and Tailwind CSS. Features a clean, minimalist design with dark/light mode support.

## Features
- Responsive design
- Dark/light mode toggle
- Modern UI components using shadcn/ui
- Smooth animations with Framer Motion
- Chat interface integration (prepared for Fastbots AI integration)

## Technology Stack
- React
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion
- shadcn/ui components

## Development Status
Last Updated: March 19, 2024

### Recent Updates
- Added chat interface component (currently hidden, ready for future Fastbots AI integration)
- Optimized main title positioning and styling
- Prepared Docker configuration for deployment

## Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Docker Support
The project includes Docker configuration for containerized deployment:
```bash
# Build Docker image
docker build -t strijder-ai-website .

# Run container
docker run -p 80:80 strijder-ai-website
```

## Deployment
The website is configured for deployment on Hostinger, with Docker support for containerized hosting.

## License
All rights reserved. © 2024 Strijder AI
