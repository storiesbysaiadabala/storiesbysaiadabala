# 🎨 Component Import Assets

If you prefer to import images directly into your React `.jsx` components using JavaScript imports:

```jsx
// Inside any component, e.g. src/components/AboutSection.jsx:
import myPhoto from '../assets/images/photographer.jpg';

// In your JSX:
<img src={myPhoto} alt="Photographer" className="about-portrait-img" />
```

Or for simple usage without imports, drop images into `public/images/` and reference `/images/...` directly.
