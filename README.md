# ABC Fitness Studio Website

A modern, responsive website for ABC Fitness Studio showcasing their services, classes, and community engagement.

## Features

### 1. Homepage
- Hero section with welcoming message
- Benefits showcase with four key features:
  - Modern Facilities
  - Diverse Classes
  - Expert Trainers
  - Welcoming Community

### 2. Gallery
- Grid layout displaying fitness classes and merchandise
- Shopping cart functionality
- Interactive "Add to Cart" buttons
- Modal-based cart view
- Responsive image display

### 3. About Us
- Studio information
- Hours of operation
- Contact form with data persistence
- Professional layout with clean typography

### 4. Community
- Member testimonials
- Community involvement information
- Upcoming events calendar
- Newsletter subscription

## Technical Features

### Frontend Technologies
- HTML5
- CSS3 with modern features:
  - Flexbox
  - CSS Grid
  - Custom Properties
  - Media Queries
- JavaScript with jQuery
- Bootstrap 4.5.2

### Interactive Elements
- Shopping cart system using SessionStorage
- Contact form with LocalStorage
- Newsletter subscription system
- Responsive navigation
- Modal windows for cart display

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Optimized layouts for all screen sizes
- Touch-friendly interface

### Performance Features
- Optimized image loading
- Efficient CSS organization
- Minified external resources
- Fast-loading jQuery from CDN

## Style Guide

### Colors
- Primary Blue: #4A90E2
- Dark Blue: #2D3E50
- Light Gray: #F8FAFC
- Text Gray: #64748B
- Border Gray: #E2E8F0

### Typography
- Font Family: 'Segoe UI', system-ui, -apple-system, sans-serif
- Heading Sizes:
  - h1: 2.5rem
  - h2: 2rem
  - h3: 1.5rem

## Project Structure
```
├── index.html          # Homepage
├── gallery.html        # Classes and products gallery
├── about.html          # Studio information and contact
├── community.html      # Community features
├── styles.css         # Main stylesheet
├── script.js          # JavaScript functionality
└── images/            # Image assets
```

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm start
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements
- Online class booking system
- Member portal integration
- Payment gateway integration
- Class schedule management
- Social media integration