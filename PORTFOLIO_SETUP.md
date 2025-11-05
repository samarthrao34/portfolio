# Portfolio Website - Setup Instructions

## 🎨 Your New Portfolio Website

Congratulations! Your personalized portfolio website has been created with a cozy-creative brand aesthetic!

## 📂 Folder Structure & Content

### Where to Add Your Content

1. **Illustrations** - Add to `d:\Portfolio1.0\VIP\` folders:
   - `Design/` - Design work
   - `Illustrations/Background/` - Background art
   - `Illustrations/Bubbuls/` - Fan art  
   - `Illustrations/Traditional Art/` - Process/traditional art

2. **Animations** - Add MP4 files to:
   - `d:\Portfolio1.0\VIP\Animations/`

3. **Process & Learning** - Add to:
   - `d:\Portfolio1.0\VIP\Roughs/` - Storyboards and rough sketches
   - `d:\Portfolio1.0\VIP\WIP/` - Work in progress
   - `d:\Portfolio1.0\VIP\Time-lapse/` - Behind the scenes videos
   - `d:\Portfolio1.0\VIP\Sheets/` - Character sheets
   - `d:\Portfolio1.0\VIP\MWS/` - Case studies

4. **CV/Resume** - Add your CV PDF to:
   - `d:\Portfolio1.0\portfolio\public\cv\Vipshyana_Upadhyay_CV.pdf`

5. **Profile Image** - Already configured to use:
   - `d:\Portfolio1.0\portfolio\public\animation\IMG-20251030-WA0015.jpg`

## 🔧 Setup & Configuration

### Update Your Social Links

Edit `d:\Portfolio1.0\portfolio\src\components\Contact.jsx` and update the social links:

```javascript
const socialLinks = [
  { name: 'Email', url: 'mailto:YOUR_EMAIL@example.com', display: 'YOUR_EMAIL@example.com' },
  { name: 'Instagram', url: 'https://instagram.com/YOUR_USERNAME', display: '@YOUR_USERNAME' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/YOUR_USERNAME', display: '/YOUR_USERNAME' },
  // ... update other links
];
```

### Vite Configuration for Assets

The website is configured to load assets from the VIP folder. Make sure Vite can access these files.

Add to `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.webp', '**/*.mp4', '**/*.mov'],
  resolve: {
    alias: {
      '/VIP': path.resolve(__dirname, '../VIP')
    }
  }
})
```

## 🚀 Running the Website

1. **Install Dependencies** (if not already done):
   ```powershell
   cd d:\Portfolio1.0\portfolio
   npm install
   ```

2. **Start Development Server**:
   ```powershell
   npm run dev
   ```

3. **Build for Production**:
   ```powershell
   npm run build
   ```

## 🎨 Website Sections

Your portfolio now includes:

1. **Hero Section** - Quick intro with your name and navigation
2. **Illustrations Gallery** - Filtered by Design, Background, Fan Art, Process
3. **Animation Showcase** - Video grid with modal viewer
4. **Process & Learning** - Behind the scenes, breakdowns, case studies
5. **About Me** - Personal story, skills, downloadable CV
6. **Contact** - Social links, email, CTA

## 🎨 Color Scheme (Cozy-Creative Brand)

- Primary Pink: `#FF6B9D`
- Accent Coral: `#F67280`
- Soft Pink: `#FFB6C1`
- Purple: `#6C5B7B`
- Light backgrounds: `#FFF8F0`, `#FFE4E1`, `#E6F3FF`

## 📝 Next Steps

1. ✅ Add your CV PDF to `public/cv/`
2. ✅ Update social media links in Contact.jsx
3. ✅ Add your artwork to the VIP folders
4. ✅ Update the email address in About.jsx and Contact.jsx
5. ✅ Test the website locally
6. ✅ Deploy to your hosting service

## 🛠 Troubleshooting

### Images not loading?
- Make sure images are in the correct VIP subfolders
- Check file extensions (.jpg, .jpeg, .png, .gif, .webp)
- Verify Vite configuration for asset paths

### Videos not playing?
- Ensure videos are .mp4 format
- Check file sizes (large files may load slowly)
- Videos should be in VIP/Animations or VIP/Time-lapse folders

## 📞 Need Help?

The website uses:
- **React** for UI components
- **Framer Motion** for animations
- **Three.js** for 3D backgrounds (existing)
- **CSS** for styling

Enjoy your new portfolio! ✨🎨

---

**Created on:** November 4, 2025
**For:** Vipshyana Upadhyay
**Brand:** Cozy-Creative Portfolio
