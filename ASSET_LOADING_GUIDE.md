# Asset Loading Guide

## ✅ Setup Complete

Your VIP folder has been copied to `public/VIP/` so Vite can serve the files.

## 🔍 How to Check if Images Are Loading

1. **Open Browser Console** (F12 or Right-click → Inspect → Console tab)
2. **Look for these messages:**
   - "Loading illustrations..." - Component started
   - "Total images loaded: 70" - All paths created
   - "Loaded: /VIP/Design/blrn.png" - Individual image loaded successfully
   - If you see "Failed to load image:" - that specific file has an issue

3. **Test Individual Images:**
   - Open: http://localhost:5173/VIP/Design/blrn.png
   - Open: http://localhost:5173/VIP/Background/bg.jpg
   - Open: http://localhost:5173/VIP/Animations/blob.mp4
   - If these open successfully, the setup is correct!

## 📝 When You Add New Images/Videos

Every time you add new content to `d:\Portfolio1.0\VIP\`, run this command:

```powershell
cd d:\Portfolio1.0\portfolio
.\copy-assets.ps1
```

This will copy all new files from VIP to public/VIP

## 🔧 Troubleshooting

### Images show "Image not found"
**Cause:** File doesn't exist or path is wrong
**Fix:** 
1. Check file exists in `d:\Portfolio1.0\VIP\[folder]\[filename]`
2. Run `.\copy-assets.ps1` to recopy files
3. Refresh browser (Ctrl+F5)

### No images showing at all
**Cause:** public/VIP folder might be empty
**Fix:**
```powershell
cd d:\Portfolio1.0\portfolio
Remove-Item .\public\VIP -Recurse -Force
Copy-Item -Path "..\VIP" -Destination ".\public\VIP" -Recurse -Force
```
Then refresh browser

### Videos not playing
**Cause:** Video codec or file size issue
**Fix:**
1. Ensure videos are .mp4 format
2. Try compressing large videos
3. Check browser console for specific errors

## 🎯 Quick Verification

Run this to see what files are available:

```powershell
Get-ChildItem d:\Portfolio1.0\portfolio\public\VIP -Recurse -File | Select-Object FullName
```

## 📊 Current Asset Count

Run `.\copy-assets.ps1` to see:
- Total files
- Illustrations count
- Animations count  
- Process items count

## 🌐 Direct File Access Test

Try accessing these URLs in your browser:
- http://localhost:5173/VIP/Design/blrn.png
- http://localhost:5173/VIP/Background/bg.jpg
- http://localhost:5173/VIP/Bubbuls/bubbuls%204.jpg
- http://localhost:5173/VIP/Animations/blob.mp4

If these work, your gallery will work!

---

**Remember:** After adding new files to VIP, always run `.\copy-assets.ps1` and refresh your browser!
