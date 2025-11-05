# Quick Start Guide 🚀

## Your Cozy-Creative Portfolio Website

Your portfolio is now ready! Here's everything you need to know:

## 📁 Where to Add Your Content

### 1. Illustrations
```
d:\Portfolio1.0\VIP\Design\           → Design category
d:\Portfolio1.0\VIP\Illustrations\Background\  → Background category
d:\Portfolio1.0\VIP\Illustrations\Bubbuls\    → Fan Art category
d:\Portfolio1.0\VIP\Illustrations\Traditional Art\ → Process category
```

### 2. Animations (MP4 videos)
```
d:\Portfolio1.0\VIP\Animations\
```

### 3. Process & Learning
```
d:\Portfolio1.0\VIP\Roughs\        → Storyboards
d:\Portfolio1.0\VIP\WIP\           → Work in Progress
d:\Portfolio1.0\VIP\Time-lapse\    → Time-lapse videos
d:\Portfolio1.0\VIP\Sheets\        → Character sheets
d:\Portfolio1.0\VIP\MWS\           → Case studies
```

### 4. Your CV
```
d:\Portfolio1.0\portfolio\public\cv\Vipshyana_Upadhyay_CV.pdf
```

## ⚙️ Configuration Required

### Update Social Links
Edit `src/components/Contact.jsx` lines 6-43 and replace:
- `vipshyana.upadhyay@example.com` → Your real email
- `@yourusername` → Your real social handles
- URLs → Your actual social media profiles

### Update Email in Hero
Edit `src/components/Hero.jsx` line 89:
- Replace the intro text with your preferred tagline if desired

## 🎯 Run Your Portfolio

1. **Start Development Server:**
   ```powershell
   cd d:\Portfolio1.0\portfolio
   npm run dev
   ```
   Then open http://localhost:5173

2. **Build for Production:**
   ```powershell
   npm run build
   ```

3. **Preview Production Build:**
   ```powershell
   npm run preview
   ```

## 🎨 Website Structure

Your portfolio has **5 main sections**:

1. **Hero** - Intro + animated banner + navigation buttons
2. **Illustrations** - Gallery with 4 categories (Design, Background, Fan Art, Process)
3. **Animations** - Video showcase with modal player
4. **Process & Learning** - Behind-the-scenes, breakdowns, case studies
5. **About Me** - Your story, skills, downloadable CV
6. **Contact** - Social links, email, CTA message

## 🎨 Brand Colors

- Pink: `#FF6B9D`
- Coral: `#F67280`
- Purple: `#6C5B7B`
- Soft Pink: `#FFB6C1`
- Cream backgrounds: `#FFF8F0`, `#FFE4E1`

## ✨ Features

- ✅ Smooth scroll navigation
- ✅ Animated particle banner
- ✅ Hover effects on all cards
- ✅ Video modal for animations
- ✅ Filterable illustration gallery
- ✅ Tabbed process section
- ✅ Downloadable CV button
- ✅ Social media cards
- ✅ Mobile responsive
- ✅ Loading screen
- ✅ 3D background (existing feature)

## 🔧 Troubleshooting

**Issue:** Images/videos not showing
- **Fix:** Make sure files are in the correct VIP subfolders
- **Fix:** Check Vite is configured properly (already done)
- **Fix:** Restart dev server after adding new files

**Issue:** CV download not working
- **Fix:** Add your PDF to `public/cv/Vipshyana_Upadhyay_CV.pdf`

**Issue:** Social links not opening
- **Fix:** Update URLs in `Contact.jsx` with your real profiles

## 📦 Tech Stack

- React 19
- Framer Motion (animations)
- Three.js (3D background)
- Vite (build tool)
- CSS (custom cozy styling)

## 🚀 Next Steps

1. [ ] Add your CV PDF
2. [ ] Update social media links
3. [ ] Add your artwork to VIP folders
4. [ ] Test locally with `npm run dev`
5. [ ] Customize colors/text if needed
6. [ ] Build and deploy!

---

**Need help?** Check `PORTFOLIO_SETUP.md` for detailed instructions.

**Enjoy your new portfolio!** ✨🎨
