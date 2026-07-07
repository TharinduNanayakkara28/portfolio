# Tharindu Nanayakkara - Personal Portfolio

A modern, fast, and responsive personal portfolio website built with Next.js (App Router), Tailwind CSS, and Framer Motion. 
Designed to showcase skills, research, projects, and professional background.

## 🚀 Quick Start (Local Development)

### Requirements
- Node.js 18.x or later installed.
- npm (Node Package Manager)

### Setup Instructions

1. **Install Dependencies**
   Navigate to the project root and run:
   ```bash
   npm install
   ```

2. **Run the Development Server**
   Start the local dev server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## 📝 Updating Content

All personal data, projects, research, skills, and experience are managed through a single source of truth.

To update any content on the website:
1. Open the file `src/lib/content.ts`
2. Modify the JSON object structured inside.
3. Save the file. The website sections will automatically reflect the changes immediately!

*Note: For the contact form to work properly, ensure the `email` property in `content.ts` is up to date, as it uses a `mailto:` fallback.*

## 🌐 Deploying to Vercel (Recommended)

Next.js projects are optimized for Vercel. Deployment is free and fast.

1. **Push to GitHub**
   Create a repository on your GitHub account and push this project codebase to it.

2. **Import to Vercel**
   - Create an account or log in to [Vercel](https://vercel.com).
   - Click **Add New Project**.
   - Import your newly created GitHub repository.
   - Leave all the default settings (Framework Preset: Next.js).
   - Click **Deploy**.

Vercel will build and deploy your application. Every subsequent push to the `main` branch will automatically trigger a new deployment.

## ✅ Pre-Publish Checklist (Before going live)

Before sharing your portfolio link, make sure to do the following:

- [ ] **Links**: Replace all placeholder links (`#`) in `src/lib/content.ts` (e.g., `repoUrl`, `websiteUrl`) with actual links to your projects, or remove the properties entirely if they don't apply.
- [ ] **Resume/CV**: Add your actual PDF CV to the `public/` directory (e.g., `public/cv.pdf`) and update the "Download CV" button in `src/components/sections/Hero.tsx`. Uncomment the button to display it.
- [ ] **OpenGraph Image**: Add an image representing you or your work to the `public/` directory named `og-image.jpg` so link previews appear correctly on social media.
- [ ] **Metadata URLs**: Update the placeholder URLs in `src/app/layout.tsx` (in the `metadata` const) with your actual Vercel or custom domain name.
- [ ] **Favicon**: Optional, but you can replace the default `public/favicon.ico` with your own icon.

## 🛠️ Built With
- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
