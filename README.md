# Hierarchical Tree Structure in Angular

## Developer Information
- **Name**: SHEKHAR CHAUHAN
- **Phone Number**: 8398964209
- **UPI ID**: 21564shekhar@okicici
- **Email**: shekharchauhan9050@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/shekhar-chauhan-2b39881b2/


## Assignment Overview

This project demonstrates the implementation of a hierarchical tree structure display component using Angular framework. The component takes a flat key-value object and transforms it into a visually indented tree structure using semantic HTML elements.

### Problem Statement
Build an Angular component that displays a tree-like data structure as a properly indented hierarchy using nested `<ul>` and `<li>` lists.

### Input Data
```javascript
const tree = {
  "a": ["b", "c"],
  "b": ["d", "e"],
  "c": ["f", "g"],
  "e": ["h", "i"],
  "f": ["j", "k"]
};
```

### Expected Output
```
a
- b
    - d
    - e
        - h
        - i
- c
    - f
        - j
        - k
    - g
```

## Technical Implementation

### Key Features
- ✅ Pure Angular implementation (no external libraries)
- ✅ Semantic HTML using `<ul>` and `<li>` elements
- ✅ Recursive template rendering for nested structures
- ✅ Automatic root node detection
- ✅ Clean CSS-based indentation
- ✅ TypeScript interfaces for type safety

### Architecture
1. **Tree Component**: Main component handling tree data transformation and display
2. **TreeNode Interface**: TypeScript interface defining the tree structure
3. **Recursive Templates**: Angular template recursion for nested rendering
4. **Data Transformation**: Algorithm to convert flat object to hierarchical structure

### Project Structure
```
src/
├── app/
│   ├── tree.component.ts      # Main tree display component
│   ├── app.component.ts       # Root application component
│   └── app.module.ts          # Angular module configuration
├── index.html                 # Application entry point
├── main.ts                    # Bootstrap file
└── styles.css                 # Global styles
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Angular CLI (v17 or higher)
- npm or yarn package manager

### Steps to Run
1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd tree-hierarchy-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   ng serve
   ```

4. **Open in browser**
   Navigate to `http://localhost:4200`

## Development Process

### Time Investment
**Total Development Time**: [35 minutes]
- Planning & Analysis: [10 minutes]
- Component Development: [15 minutes]
- Styling & Refinement: [5 minutes]
- Testing & Debugging: [5 minutes]

### Approach
1. **Data Analysis**: Analyzed the input structure to understand parent-child relationships
2. **Algorithm Design**: Developed logic to identify root nodes and build hierarchical structure
3. **Component Architecture**: Created reusable component with TypeScript interfaces
4. **Template Design**: Implemented recursive templates for dynamic nesting
5. **Styling**: Applied minimal CSS for clean visual hierarchy

## Code Quality & Standards

- **TypeScript**: Strong typing with interfaces and type safety
- **Angular Best Practices**: Following Angular style guide and conventions
- **Clean Code**: Readable, maintainable, and well-documented code
- **Semantic HTML**: Proper use of list elements for hierarchical data
- **Responsive Design**: Works across different screen sizes

## Testing

The application has been tested for:
- ✅ Correct tree structure rendering
- ✅ Proper indentation at all levels
- ✅ Root node identification
- ✅ Recursive template functionality
- ✅ Cross-browser compatibilitys