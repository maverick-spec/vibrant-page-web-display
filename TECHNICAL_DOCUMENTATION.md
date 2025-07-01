
# Technical Documentation - Perssonify Website

## Architecture Overview

### Application Structure
The Perssonify website follows a component-based architecture using React with TypeScript, emphasizing reusability, maintainability, and performance.

## Component Architecture

### Layout Components
```typescript
// Header.tsx - Main navigation component
interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: (checked: boolean) => void;
}
```

**Key Features:**
- Fixed positioning with backdrop blur
- Responsive dropdown menus with center alignment
- Mobile-first hamburger menu
- Theme-aware styling throughout
- Keyboard navigation support

**Implementation Details:**
- Uses React hooks for state management
- Implements proper event handling for dropdowns
- Mobile menu spans full viewport height
- Dropdown positioning uses transform: translateX(-50%) for centering

### Interactive Components

#### TimelineSection.tsx
**Purpose:** Showcase Growth and Strategic Solutions with tabbed interface

**Technical Implementation:**
```typescript
const [activeTab, setActiveTab] = useState('growth');
const currentContent = activeTab === 'growth' ? growthContent : strategicContent;
```

**Key Features:**
- Sticky sidebar navigation on desktop
- Smooth tab transitions with Framer Motion
- Responsive grid layout
- Mobile-optimized stacking

**CSS Classes Used:**
- `lg:sticky lg:top-24` for sticky positioning
- `lg:col-span-3` and `lg:col-span-9` for responsive grid
- Custom transition classes for smooth animations

#### AnimatedUnderline.tsx
**Purpose:** Provide smooth navigation link animations

**Technical Implementation:**
```typescript
className={`relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-px after:w-full after:transition-transform after:ease-in-out after:duration-300 ` +
  (active ? 'after:origin-bottom-left after:scale-x-100' : 'after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100')}
```

**Animation Strategy:**
- CSS-based animations for optimal performance
- Transform origin manipulation for smooth scaling
- Duration: 300ms with ease-in-out timing

## Styling System

### Tailwind CSS Configuration
The project uses a custom Tailwind configuration with:

**Custom Colors:**
- Primary: Theme teal color
- Muted: Subtle backgrounds
- Foreground/Background: Semantic color naming

**Responsive Breakpoints:**
- `sm: 640px` - Small devices
- `md: 768px` - Medium devices  
- `lg: 1024px` - Large devices
- `xl: 1280px` - Extra large devices
- `2xl: 1536px` - 2X large devices

**Custom Utilities:**
```css
.custom-shadow {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
```

### Component Styling Patterns

#### Card Components
```typescript
<Card className="border-0 bg-card custom-shadow">
  <CardHeader>
    <CardTitle className="text-lg md:text-xl font-bold mb-2">
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
  </CardContent>
</Card>
```

**Styling Strategy:**
- Consistent spacing with responsive modifiers
- Border-radius for modern appearance
- Shadow system for depth
- Hover states for interactivity

## State Management

### Component State Patterns

#### Local State with useState
```typescript
const [activeTab, setActiveTab] = useState('growth');
const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

#### Effect Hooks for Side Effects
```typescript
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setActiveDropdown(null);
    }
  };
  
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);
```

#### Ref Usage for DOM Manipulation
```typescript
const dropdownRef = useRef<HTMLDivElement>(null);
const timeoutRef = useRef<NodeJS.Timeout | null>(null);
```

## Animation Implementation

### Framer Motion Integration

#### Page Transitions
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
```

#### Stagger Animations
```typescript
{stages.map((stage, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
))}
```

#### Dropdown Animations
```typescript
<motion.div
  initial={{ opacity: 0, y: 10, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: 10, scale: 0.95 }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
>
```

## Responsive Design Strategy

### Mobile-First Approach
All components are built with mobile-first responsive design:

```typescript
className="text-3xl md:text-5xl lg:text-6xl font-bold"
className="px-4 sm:px-6 lg:px-8 max-w-6xl"
className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
```

### Breakpoint Strategy
- **Mobile (default)**: Single column layouts, full-width elements
- **Tablet (md)**: Two-column grids, increased spacing
- **Desktop (lg+)**: Multi-column layouts, sidebar navigation

### Container Management
```typescript
<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
```

**Strategy:**
- Consistent max-width across pages
- Responsive horizontal padding
- Centered content alignment

## Performance Optimizations

### Code Splitting
- Route-based splitting with React Router
- Component lazy loading where appropriate
- Dynamic imports for heavy components

### Animation Performance
- Transform-based animations (translateX, scale, rotate)
- GPU-accelerated properties
- Reduced motion queries for accessibility

### Asset Optimization
- Optimized image formats
- Icon system with Lucide React
- Efficient bundle splitting with Vite

## TypeScript Integration

### Interface Definitions
```typescript
interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: (checked: boolean) => void;
}

interface StageData {
  stage: string;
  purpose: string;
  questions: string;
  output: string;
  icon: React.ComponentType<any>;
}
```

### Type Safety Patterns
- Strict null checks enabled
- Proper event typing for handlers
- Component prop validation
- Ref typing for DOM elements

## Build and Development

### Vite Configuration
The project uses Vite for fast development and optimized builds:

**Key Features:**
- Hot Module Replacement (HMR)
- TypeScript support out of the box
- Optimized production builds
- Asset processing and optimization

### Development Scripts
```json
{
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview"
}
```

## Error Handling

### Component Error Boundaries
While not explicitly shown in the current code, consider implementing:

```typescript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo);
  }
}
```

### Async Error Handling
For future API integrations:

```typescript
try {
  const response = await fetch('/api/endpoint');
  const data = await response.json();
} catch (error) {
  console.error('API Error:', error);
  // Handle error appropriately
}
```

## Accessibility Features

### Keyboard Navigation
- Proper tab order throughout the site
- Enter/Escape key handling for dropdowns
- Focus management for modal elements

### Screen Reader Support
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for images
- ARIA labels where necessary

### Color Contrast
- High contrast ratios for text
- Theme-aware color schemes
- Visual focus indicators

## Future Considerations

### Scalability
- Component library extraction
- Shared state management (Redux/Zustand)
- API integration patterns
- Caching strategies

### Performance Monitoring
- Core Web Vitals tracking
- Bundle size monitoring
- Runtime performance profiling
- User experience metrics

### Testing Strategy
- Unit tests for utility functions
- Component testing with React Testing Library
- Integration tests for user workflows
- Visual regression testing

---

This technical documentation provides a comprehensive overview of the codebase architecture, implementation patterns, and development practices used in the Perssonify website.
