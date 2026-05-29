# Mohd. Tarique Ansari — Portfolio

A modern, premium portfolio website built with vanilla HTML, CSS, and JavaScript.

## Features

- 🎨 **Premium Design** — Deep indigo/violet color scheme with gradient accents
- 📱 **Fully Responsive** — Works on desktop, tablet, and mobile
- ⚡ **Smooth Animations** — Fade-up effects, typewriter text, hover interactions
- 🎯 **Sections** — Hero, About, Skills, Projects, Experience, Education, Certifications, Contact
- 🔍 **SEO Optimized** — Proper meta tags, semantic HTML, heading hierarchy
- 🌐 **GitHub Pages Ready** — Static files, no build step required

## Deployment to GitHub Pages

1. Create a new GitHub repository named `<your-username>.github.io`
2. Push all files from this directory to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio deployment"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. Go to your repository → Settings → Pages
4. Set source to **Deploy from a branch** → **main** → **/ (root)**
5. Your site will be live at `https://<your-username>.github.io`

## Local Development

Open `index.html` directly in your browser, or run a local server:

```bash
npx serve -l 8080
```

## Tech Stack

- HTML5
- Vanilla CSS (with CSS Custom Properties)
- Vanilla JavaScript (ES6+)
- [Lucide Icons](https://lucide.dev/) via CDN
- [Google Fonts](https://fonts.google.com/) — Inter, Poppins, JetBrains Mono

## Customization

All portfolio data is stored in the `portfolioData` object in `script.js`. Update it to change:
- Name, bio, and role
- Skills and tools
- Projects and experience
- Education and certifications
- Social links and contact info
- Resume download link

## License

© 2026 Mohd. Tarique Ansari
