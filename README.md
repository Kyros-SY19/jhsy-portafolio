Jhair Humberto Saucedo Yauri – Developer Portfolio

This repository contains my personal portfolio website.

I built it from scratch using plain HTML, CSS and vanilla JavaScript as a way to strengthen my fundamentals — no frameworks, no build tools, no backend. The goal was to focus on structure, performance, accessibility, and clean code organization.

The site is deployed on GitHub Pages and uses EmailJS for client-side form handling.

🚀 Live Site

👉 https://YOUR_USERNAME.github.io/YOUR_REPO/

🧠 Why I Built It This Way

Instead of using React or a template, I decided to:

Work directly with semantic HTML5

Design a small CSS system using custom properties

Organize JavaScript by responsibility (UI logic vs form logic)

Keep everything lightweight and fast

This project reflects my current focus on frontend architecture and scalable structure before moving fully into larger full-stack and AI systems.

✨ Features

Single-page layout with section-based navigation

Dark glass-style UI with a purple accent system

Scroll-triggered reveal animations

Certificate lightbox gallery

Fully responsive design

Contact form powered by EmailJS (no backend required)

Accessible structure (ARIA roles, keyboard navigation)

🛠 Tech Stack

HTML5 (semantic markup)

CSS3 (custom properties, flexbox, grid)

Vanilla JavaScript (ES6+)

EmailJS (client-side email handling)

GitHub Pages (deployment)

No frameworks. No bundlers. No dependencies.

Project Structure 📁

PORTAFOLIO/
│
├── css/
│ └── style.css
│
├── images/
│ ├── certificates/
│ └── icons/
│
├── js/
│ ├── main.js
│ └── contact.js
│
├── index.html
└── README.md

Contact Form (EmailJS) 📧

The form works entirely on the client side using EmailJS.

To configure it:

Create an account at emailjs.com

Add an email service

Create a template with:

From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

{{message}}

Replace the keys in js/contact.js

The free tier allows up to 200 emails/month — more than enough for a personal site.

Future Improvements

Component-based CSS split (layout / components / utilities)

Performance optimizations (image compression, lazy loading improvements)

Possible migration to a full-stack architecture later

License

MIT

Built and maintained by Jhair Humberto Saucedo Yauri.
