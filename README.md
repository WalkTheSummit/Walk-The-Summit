# Walk The Summit (WTS) – Developer Guide

Hi there! I’m Swarit, the former developer at Walk The Summit (WTS).  
If you’re reading this, you're probably getting ready to contribute —awesome!

---

## 🚨 Prerequisite

**IMPORTANT:** Before diving in, make sure you're comfortable with GitHub and how version control systems (VCS) work. It’ll make your life a lot easier.

---

## 🛠️ Getting Started

Once you’re up to speed with Git and GitHub:

1. **Request Contributor Access**  
   The WTS email is the owner of the repository—reach out there to be added as a contributor.

2. **Tag Logic** (Very Important)  
   - `REMOVER` class = **Desktop website is shown**  
   - `ANTI-REMOVER` class = **Mobile/phone version is shown**  
   Use these to control responsive behavior.

3. **Search for Key Terms**  
   - Use `Ctrl+F` to locate:
     - `"CENETERER"` – handles centering elements
     - `"glassmorphism"` – used in the CSS only

4. **Animations & External Repos**  
   - The **Donate page animation** and **horizontal scroll effects** are embedded using iframes.
   - These point to separate repos owned by me, due to GitHub’s size limitations.
   - If you need to edit those, contact me and I’ll grant you contributor access.

---

## 🔗 Domain Info

- **CNAME:** `walkthesummit.org`  
- Live site: [https://walkthesummit.org](https://walkthesummit.org) {Powered by github pages}
- You may clone to make a build repo.

---

## 📬 Contact Form

- The contact form is powered by the **Formspree API**.
- If it's not working or becomes outdated, reach out to me.

---

## 🎞️ Animations

- The site uses the **GSAP (GreenSock Animation Platform)** library for transitions (like fade-ins).
- To learn more, check the official GSAP docs and search `gsap` in `index.html`.

---

Happy coding!  
— Swarit 💻
