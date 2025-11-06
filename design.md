# Portfolio Design Style Guide

## Design Philosophy

### Color Palette
- **Primary**: Deep navy (#1a1d29) - Professional, tech-focused
- **Secondary**: Soft teal (#4ecdc4) - Modern, Flutter-inspired
- **Accent**: Warm coral (#ff6b6b) - Energy and creativity
- **Neutral**: Light gray (#f8f9fa) - Clean backgrounds
- **Text**: Charcoal (#2c3e50) - High contrast readability

### Typography
- **Display Font**: "Inter" - Modern, clean sans-serif for headings
- **Body Font**: "Source Sans Pro" - Highly readable for content
- **Code Font**: "JetBrains Mono" - For technical content and code snippets
- **Font Sizes**: Large headings (3rem+), medium subheadings (1.5rem), small body text (0.9rem) for high-resolution elegance

### Visual Language
- **Minimalist Tech Aesthetic**: Clean lines, generous whitespace, geometric shapes
- **Mobile-First Inspiration**: UI elements reminiscent of Flutter's Material Design
- **Subtle Gradients**: Soft transitions between primary and secondary colors
- **Card-Based Layout**: Elevated surfaces with subtle shadows

## Visual Effects & Animations

### Used Libraries
- **Anime.js**: Smooth micro-interactions and element animations
- **Splitting.js**: Text reveal effects for headings
- **ECharts.js**: Interactive skills visualization charts
- **p5.js**: Creative coding background effects
- **Splide**: Smooth project carousel with touch gestures

### Effect Implementation
- **Text Animation**: Character-by-character reveal using Splitting.js with stagger timing
- **Background**: Subtle particle system using p5.js with floating geometric shapes
- **Scroll Motion**: Gentle fade-in animations (150-300ms) with 16-24px vertical translation
- **Hover Effects**: 3D tilt on project cards, color morphing on buttons, shadow expansion

### Header Effect
- **Animated Background**: Floating code snippets and Flutter icons using p5.js
- **Gradient Overlay**: Subtle teal-to-navy gradient with 40% opacity
- **Typography Animation**: Typewriter effect for name with color cycling emphasis

### Interactive Elements
- **Project Cards**: Hover to reveal tech stack with smooth overlay animation
- **Skills Chart**: Interactive radar chart with hover tooltips
- **Timeline**: Clickable nodes with expanding content areas
- **Contact Form**: Real-time validation with smooth error/success states

### Mobile Considerations
- **Touch-Friendly**: All interactive elements sized for finger navigation
- **Swipe Gestures**: Project gallery supports horizontal swiping
- **Responsive Animations**: Reduced motion on smaller screens for performance
- **Loading States**: Skeleton screens and progressive image loading