# Deployment Guide

Deploy your F1-themed portfolio to the web! 🚀

## Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: F1 portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Done!** Your site is live at `your-project.vercel.app`

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Option 2: Netlify

### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out/` folder
   - Or connect your GitHub repo for continuous deployment

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`

## Option 3: GitHub Pages

### Steps:

1. **Update next.config.js**
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name', // Add this line
     images: { unoptimized: true },
   };
   ```

2. **Build and deploy**
   ```bash
   npm run build
   
   # Install gh-pages
   npm install -D gh-pages
   
   # Add to package.json scripts:
   # "deploy": "gh-pages -d out"
   
   npm run deploy
   ```

3. **Enable GitHub Pages**
   - Go to repository settings
   - Navigate to "Pages"
   - Select `gh-pages` branch
   - Save

4. **Access your site** at `https://yourusername.github.io/your-repo-name`

## Option 4: Self-Hosted (VPS/Cloud)

### Using Nginx:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Copy files to server**
   ```bash
   scp -r out/* user@your-server:/var/www/portfolio
   ```

3. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/portfolio;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **Restart Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

## Environment Variables

If you add API keys or secrets:

1. Create `.env.local` file (never commit this!)
   ```
   NEXT_PUBLIC_API_KEY=your_key_here
   ```

2. Add to Vercel/Netlify dashboard under "Environment Variables"

3. Access in code:
   ```javascript
   const apiKey = process.env.NEXT_PUBLIC_API_KEY;
   ```

## Performance Optimization

### Before Deploying:

1. **Optimize Images**
   - Compress images using tools like TinyPNG
   - Use WebP format when possible
   - Place in `public/images/`

2. **Check Bundle Size**
   ```bash
   npm run build
   # Check the output for bundle sizes
   ```

3. **Test Performance**
   - Run Lighthouse in Chrome DevTools
   - Aim for 90+ scores
   - Fix any issues before deploying

### After Deploying:

1. **Enable Caching**
   - Vercel/Netlify handle this automatically
   - For self-hosted, configure cache headers

2. **Add CDN**
   - Vercel/Netlify include CDN
   - For self-hosted, consider Cloudflare

3. **Monitor Performance**
   - Use Vercel Analytics or Google Analytics
   - Monitor Core Web Vitals

## Troubleshooting

### Build Fails

- Check Node.js version (18+ required)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for syntax errors in components

### Animations Not Working

- Ensure GSAP is installed: `npm install gsap`
- Check browser console for errors
- Verify ScrollTrigger is imported

### Styles Not Loading

- Check CSS module imports
- Verify `globals.css` is imported in `layout.js`
- Clear browser cache

### 404 Errors

- For GitHub Pages, ensure `basePath` is set correctly
- Check that all links use relative paths
- Verify `trailingSlash: true` in `next.config.js`

## Post-Deployment Checklist

- [ ] Test all sections and animations
- [ ] Verify responsive design on mobile
- [ ] Check all links work
- [ ] Test contact form (if connected to backend)
- [ ] Verify theme toggle works
- [ ] Test in different browsers
- [ ] Check Lighthouse scores
- [ ] Set up analytics (optional)
- [ ] Add custom domain (optional)
- [ ] Share with friends! 🎉

## Continuous Deployment

### Vercel/Netlify:
- Automatically deploys on every push to main branch
- Preview deployments for pull requests
- Rollback to previous versions easily

### GitHub Actions (for other hosts):
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy
        run: |
          # Your deployment commands here
```

## Need Help?

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

Happy deploying! 🚀
