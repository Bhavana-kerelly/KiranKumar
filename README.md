# Dr. Kiran Kumar Karumuri — Orthopaedic Surgeon Website

A modern, premium, responsive healthcare website designed for **Dr. Kiran Kumar Karumuri**, Joint Replacement Surgeon.

The website focuses on a clean medical aesthetic, strong visual hierarchy, smooth interactions, responsive layouts, and an informative patient-first experience.

---

## ✨ Highlights

- Premium medical/orthopaedic visual design
- Fully responsive desktop, tablet, and mobile layouts
- Interactive hero section with cursor-reactive technical grid
- Doctor profile and professional introduction
- Expertise showcase with:
  - Robotic Joint Replacement
  - Arthroscopy
  - Complex Trauma Management
- Cinematic video presentation
- Smooth animations and micro-interactions
- Modern typography and spacing system
- Navy, blue, gold, and white medical branding
- Responsive navigation
- Call-to-action sections for appointments and consultations
- Doctor-focused trust and credibility sections
- Optimized component-based React architecture

---

## 🩺 Website Sections

### Hero
A high-impact introduction to Dr. Kiran Kumar Karumuri with a premium medical visual treatment and interactive background.

### About the Doctor
Introduces the surgeon, professional expertise, experience, and patient-focused approach.

### Expertise
Interactive specialty section featuring:

1. **Robotic Joint Replacement**
2. **Arthroscopy**
3. **Complex Trauma Management**

The section supports video playback, specialty switching, mute/unmute, progress control, and fullscreen viewing.

### Clinical Expertise
Highlights the doctor's approach to precision, advanced technology, surgical planning, and patient recovery.

### Patient-Focused CTA
Encourages visitors to schedule a consultation or contact the hospital/clinic.

### Footer
Contains important navigation, contact information, and website branding.

---

## 🎨 Design System

### Primary Colors

| Color | Usage |
|---|---|
| Deep Navy | Primary branding, headings, navigation |
| Medical Blue | Interactive elements, grids, accents |
| Gold | Premium highlights and clinical details |
| White | Main background and content surfaces |
| Soft Gray | Supporting backgrounds and subtle sections |

The visual language is intentionally clean and clinical while retaining a premium surgical/technology aesthetic.

---

## 🧩 Technology Stack

- **React.js**
- **JavaScript / JSX**
- **Tailwind CSS**
- **Framer Motion**
- **SVG**
- **HTML5 Video**
- **Responsive CSS**
- **Vite** / compatible React build environment

---

## 📁 Recommended Project Structure

```text
project/
├── public/
│   ├── videos/
│   │   ├── robotic-joint-replacement.mp4
│   │   ├── arthroscopy.mp4
│   │   └── complex-trauma-management.mp4
│   │
│   ├── images/
│   │   └── doctor/
│   │       └── doctor-profile.jpg
│   │
│   └── favicon/
│
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   ├── Expertise/
│   │   ├── About/
│   │   ├── Navbar/
│   │   └── Footer/
│   │
│   ├── assets/
│   ├── data/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🎬 Video Assets

Place the generated expertise videos inside:

```text
public/videos/
```

Recommended filenames:

```text
robotic-joint-replacement.mp4
arthroscopy.mp4
complex-trauma-management.mp4
```

Reference them in React using:

```jsx
<video src="/videos/robotic-joint-replacement.mp4" />
```

For better performance, use compressed MP4 files with a web-friendly H.264 codec.

---

## 🖱️ Interactive Hero Background

The hero background includes a subtle cursor-reactive technical grid.

The effect combines:

- Small blue square grids
- Cursor-based parallax
- Soft gold lighting
- Circular joint-inspired geometry
- Precision crosshair elements
- Multiple movement layers

The movement is intentionally subtle so the animation supports the content instead of distracting from it.

---

## 📱 Responsive Design

The website is designed for:

- Desktop
- Laptop
- Tablet
- Mobile phones

Special attention is given to:

- Mobile navigation
- Video sizing
- Typography scaling
- Touch interaction
- Section height
- Overflow handling
- CTA accessibility
- Image and video responsiveness

---

## ⚡ Performance Considerations

Recommended production practices:

- Compress large video files
- Use appropriately sized images
- Prefer WebP/AVIF for raster images where supported
- Lazy-load non-critical images/videos
- Avoid unnecessary animation on low-power devices
- Use responsive image sizes
- Keep decorative SVGs lightweight
- Minimize unused JavaScript and CSS

---

## ♿ Accessibility

The website should maintain accessible interactions through:

- Semantic HTML
- Descriptive `alt` text for meaningful images
- Keyboard-accessible controls
- Sufficient color contrast
- Visible focus states
- Appropriate button labels
- `playsInline` for mobile video
- Reduced-motion consideration for users who prefer reduced motion

---

## 🚀 Installation

Clone the project:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🔐 Environment Variables

If the project uses external services, create:

```text
.env
```

Example:

```env
VITE_API_URL=
VITE_CONTACT_ENDPOINT=
```

Never commit private API keys, passwords, tokens, or credentials to the repository.

---

## 🌐 Deployment

The project can be deployed using platforms such as:

- Vercel
- Netlify
- Cloudflare Pages
- Other React-compatible hosting platforms

Before production deployment:

1. Run the production build.
2. Verify all image and video paths.
3. Test the website on mobile.
4. Test navigation and CTA buttons.
5. Verify contact/appointment functionality.
6. Check console errors.
7. Test all expertise videos.
8. Verify SEO metadata and favicon.

---

## 🧪 Quality Checklist

Before publishing:

- [ ] Desktop layout verified
- [ ] Tablet layout verified
- [ ] Mobile layout verified
- [ ] Hero animation tested
- [ ] Expertise videos tested
- [ ] Video controls tested
- [ ] Images optimized
- [ ] Navigation tested
- [ ] CTA buttons tested
- [ ] Contact information verified
- [ ] SEO metadata added
- [ ] Favicon added
- [ ] No console errors
- [ ] Production build successful

---

## 📌 Content & Branding

**Doctor:** Dr. Kiran Kumar Karumuri  
**Specialization:** Joint Replacement & Orthopaedic Surgery

The website content, medical claims, professional credentials, contact information, and patient-facing information should be reviewed and approved by the doctor/clinic before production publication.

---

## 👨‍💻 Development & Design

Designed and developed by:

**Samuel Victor**  
**Idea2Site**

Website development, UI/UX implementation, frontend engineering, animation, responsive design, and deployment.

---

## 📄 Copyright

© 2026 **Samuel Victor & Idea2Site**. All rights reserved.

This website design, source code, custom UI components, animations, layouts, and original implementation are proprietary unless otherwise stated.

Third-party libraries, frameworks, fonts, images, videos, icons, and other assets remain the property of their respective owners and are subject to their respective licenses.

Unauthorized reproduction, redistribution, resale, or reuse of the original website implementation is not permitted without written permission.

---

## ⚖️ Medical Disclaimer

This website is intended for general informational and professional presentation purposes.

The information presented on the website should not be considered a substitute for professional medical diagnosis, treatment, or medical advice. Patients should consult a qualified healthcare professional for individual medical concerns.

---

### Built with precision by Samuel Victor × Idea2Site

**© 2026 Samuel Victor & Idea2Site — All Rights Reserved.**
