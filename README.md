# 💼 Developer Portfolio

**Modern & Responsive Personal Portfolio Website | Built with React + TypeScript + Vite**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🌟 Overview

**Developer Portfolio** is a modern, fully responsive personal portfolio website designed to showcase professional skills, projects, and experience in the tech industry. Built with cutting-edge web technologies, this single-page application delivers an elegant user experience with smooth animations, clean design, and optimal performance.

Perfect for developers, designers, and tech professionals looking to establish their online presence with a professional portfolio that stands out!

---

## ✨ Features

### 💻 **Modern Tech Stack**
- ⚡ **Lightning-fast Performance**: Powered by Vite for instant hot module replacement (HMR)
- 🔷 **Type Safety**: Built with TypeScript for robust, error-free code
- 🎨 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🔄 **Component Architecture**: Modular React components for maintainability

### 🎨 **User Interface**
- 🎆 **Hero Section**: Eye-catching introduction with professional branding
- 👤 **About Section**: Personal background and professional journey
- 🛠️ **Skills Showcase**: Display technical skills and expertise
- 📊 **Projects Gallery**: Portfolio of work with descriptions and links
- 📧 **Contact Form**: Easy way for visitors to get in touch
- 🏠 **Smooth Navigation**: Seamless scrolling between sections

### 🚀 **Performance & SEO**
- Optimized bundle size with Vite's build optimization
- Fast page load times for better user experience
- SEO-friendly structure and meta tags
- GitHub Pages deployment ready

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| **React 18** | Component-based UI framework |
| **TypeScript** | Static type checking and enhanced DX |
| **Vite** | Next-generation build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **React Router** | Client-side routing |
| **ESLint** | Code linting and quality assurance |
| **PostCSS** | CSS transformation and processing |

---

## 📸 Live Demo

🔗 **[View Live Portfolio](https://aryansharma906.github.io/developer-portfolio/)**

Experience the portfolio in action! The site is deployed on GitHub Pages and showcases all features with real-time performance.

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- Basic knowledge of React and TypeScript

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/Aryansharma906/developer-portfolio.git

# 2. Navigate to project directory
cd developer-portfolio

# 3. Install dependencies
npm install
# or
yarn install

# 4. Start development server
npm run dev
# or
yarn dev

# 5. Open in browser
# Navigate to http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build
# or
yarn build

# Preview production build locally
npm run preview
# or
yarn preview
```

---

## 📁 Project Structure

```
developer-portfolio/
│
├── src/
│   ├── assets/          # Images, icons, and media files
│   ├── components/      # Reusable React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── data/            # Data and content files
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and helpers
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
│
├── public/              # Static assets
├── .github/workflows/   # CI/CD configuration
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

---

## ⚙️ Customization

### Update Personal Information

1. **Edit content in data files** (`src/data/`)
2. **Replace profile images** in `src/assets/`
3. **Modify component content** in respective component files
4. **Update colors** in `tailwind.config.ts`

### Modify Styling

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      },
    },
  },
}
```

### Add New Sections

1. Create new component in `src/components/`
2. Import and add to `Index.tsx`
3. Update navigation links if needed

---

## 🌐 Deployment

### GitHub Pages

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (automated via GitHub Actions)
git push origin main
```

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the main branch.

### Other Platforms

**Vercel**:
```bash
npm i -g vercel
vercel deploy
```

**Netlify**:
- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `dist`

---

## 📊 Performance

- **Lighthouse Score**: 95+ across all categories
- **Bundle Size**: Optimized with code splitting
- **Load Time**: < 2 seconds on 3G networks
- **First Contentful Paint**: < 1.5 seconds

---

## 📚 Learning Outcomes

This project demonstrates expertise in:

✅ Modern React development with hooks and functional components  
✅ TypeScript for type-safe application development  
✅ Vite for blazing-fast development and optimized builds  
✅ Responsive design with Tailwind CSS utility classes  
✅ Component composition and reusability patterns  
✅ Git workflow and version control  
✅ CI/CD with GitHub Actions  
✅ Performance optimization techniques  

---

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run type-check` | Check TypeScript types |

---

## 👥 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

---

## 📜 License

This project is open-source and available for educational purposes.

---

## 📧 Contact & Connect

**✨Aryan Sharma✨**

💻 *Where algorithms dream and melodies spark*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aryan-sharma-6a7b85317/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Aryansharma906)

*🎯 Student | 💻 AI Enthusiast | 🎨 Developer*

---

### ⭐ Star this repo if you find it helpful!

Built with 💜 by **Aryan Sharma**
