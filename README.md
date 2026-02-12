# Jhair Humberto Saucedo Yauri – Portfolio

A personal portfolio website built with pure HTML, CSS, and vanilla JavaScript. Designed for deployment on GitHub Pages — no server or build tools required.

---

## ✨ Features

- Single-page layout (Hero · About · Tech Stack · Projects · Experience · Certifications · Contact)
- Glassmorphism dark design with purple accents
- Scroll-triggered fade-in animations
- Certificate lightbox gallery
- Responsive mobile/tablet/desktop layout
- Functional contact form via **EmailJS** (no backend needed)
- Accessible markup (ARIA labels, semantic HTML5, keyboard navigation)

---

## 📁 Project Structure

```
portfolio/
├── index.html                  ← Main single-page file
├── README.md
│
├── css/
│   └── style.css               ← All styles (CSS custom properties, layouts, animations)
│
├── js/
│   ├── main.js                 ← Navigation, animations, modal, utility helpers
│   └── contact.js              ← EmailJS form submission logic
│
└── images/
    ├── avatar.png              ← Profile / hero image
    ├── favicon.png             ← Browser tab icon
    │
    ├── icons/                  ← Tech stack icon images (optional – used if you swap tags for logos)
    │   ├── css.png
    │   ├── git.png
    │   ├── html.png
    │   ├── js.png
    │   ├── php.png
    │   └── react.png
    │
    └── certificates/           ← Certificate gallery images
        ├── cert-01.png
        ├── cert-02.png
        ├── ...
        └── cert-13.png
```

---

## 🚀 Technologies Used

| Category | Technologies |
|----------|-------------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, grid, flexbox, animations) |
| Scripting | Vanilla JavaScript (ES2020+) |
| Email | [EmailJS](https://www.emailjs.com) (client-side, free tier) |
| Fonts | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts |
| Icons | [Material Icons Round](https://fonts.google.com/icons) via Google Fonts |
| Hosting | [GitHub Pages](https://pages.github.com) |

---

## 📧 Configuring EmailJS

The contact form sends emails directly from the browser using EmailJS — no PHP, no Node, no server.

### Step-by-step setup

1. **Create a free account** at [emailjs.com](https://www.emailjs.com)

2. **Add an Email Service**
   - Dashboard → *Email Services* → *Add New Service*
   - Choose Gmail, Outlook, or any SMTP provider
   - Note your **Service ID** (e.g. `service_abc123`)

3. **Create an Email Template**
   - Dashboard → *Email Templates* → *Create New Template*
   - Use these variables in your template body:
     ```
     From:    {{from_name}} <{{from_email}}>
     Subject: {{subject}}

     {{message}}
     ```
   - Note your **Template ID** (e.g. `template_xyz789`)

4. **Get your Public Key**
   - Top-right avatar → *Account* → *API Keys*
   - Copy your **Public Key**

5. **Paste the three values into `js/contact.js`**
   ```js
   const EMAILJS_SERVICE_ID  = 'service_abc123';    // ← replace
   const EMAILJS_TEMPLATE_ID = 'template_xyz789';   // ← replace
   const EMAILJS_PUBLIC_KEY  = 'yourPublicKey123';  // ← replace
   ```

6. Save the file and test by submitting the contact form.

> **Free tier limits:** 200 emails/month — more than enough for a personal portfolio.

---

## 🌐 Deploying to GitHub Pages

### First-time setup

```bash
# 1. Create a new GitHub repository (e.g. "portfolio" or "username.github.io")

# 2. Clone it locally
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 3. Copy your portfolio files into the repo root
cp -r portfolio/* YOUR_REPO/

# 4. Commit and push
cd YOUR_REPO
git add .
git commit -m "Initial portfolio deploy"
git push origin main
```

### Enable GitHub Pages

1. Go to your repository on GitHub
2. *Settings* → *Pages* (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose branch `main`, folder `/ (root)`
5. Click **Save**

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/` within a minute or two.

### Updating the site

```bash
# Make your edits, then:
git add .
git commit -m "Update: describe your change"
git push origin main
```

GitHub Pages automatically rebuilds on every push to `main`.

---

## 🖼️ Adding New Images or Certificates

### Replace the profile photo
Drop your new image into `images/` with the filename `avatar.png`.  
The hero section and about section both reference this file automatically.

### Add a new certificate

1. Export your certificate as a PNG and name it sequentially:
   ```
   images/certificates/cert-14.png
   ```

2. Open `index.html` and find the **`cert-gallery`** div (search for `cert-gallery`).

3. Add a new thumbnail block at the end of the list:
   ```html
   <div class="cert-thumb" tabindex="0" role="button" aria-label="View certificate 14">
     <img src="images/certificates/cert-14.png" alt="Certificate 14" loading="lazy" />
     <span class="cert-thumb-num">14</span>
   </div>
   ```

4. That's it — the lightbox modal works automatically for every `.cert-thumb` element.

### Swap a tech stack icon
Place your `.png` image in `images/icons/` (e.g. `images/icons/python.png`), then use it in the HTML wherever you want:
```html
<img src="images/icons/python.png" alt="Python" width="24" height="24" />
```

---

## 🔧 Customization Quick Reference

| What to change | Where to look |
|---|---|
| Name, titles, descriptions | `index.html` — relevant section |
| Primary color (`#8c25f4`) | `css/style.css` → `:root { --primary }` |
| Background color | `css/style.css` → `:root { --bg-dark }` |
| Navigation links | `index.html` → `<nav>` and `#mobile-menu` |
| Social media URLs | Search `href="https://github.com/"` etc. in `index.html` |
| Email address | Search `contact@jhsy.dev` in `index.html` |
| Projects | `index.html` → `#projects` section |
| Experience entries | `index.html` → `#experience` section |
| Footer copyright | `index.html` → `<footer>` (year is auto-set by JS) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ by Jhair Humberto Saucedo Yauri*
