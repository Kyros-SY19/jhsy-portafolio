/**
 * main.js – Navigation, scroll animations, mobile menu,
 *            certificate modal, and general UI interactions.
 */

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", () => {
  /* ── Mobile menu ─────────────────────────────────────────── */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-open");
    });

    // Close on link click
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () =>
        mobileMenu.classList.remove("is-open"),
      );
    });
  }

  /* ── Active nav link on scroll ───────────────────────────── */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(
    ".nav-links a, .mobile-menu-inner a",
  );

  const setActive = () => {
    let current = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) current = section.id;
    });
    navLinks.forEach((link) => {
      link.classList.remove("text-primary");
      if (link.getAttribute("href") === `#${current}`)
        link.classList.add("text-primary");
    });
  };

  window.addEventListener("scroll", setActive, { passive: true });

  /* ── Intersection Observer – fade-in animations ──────────── */
  const fadeEls = document.querySelectorAll(".fade-in");

  if (fadeEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    fadeEls.forEach((el) => observer.observe(el));
  }

  /* ── Smooth scroll for anchor buttons ────────────────────── */
  document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.dataset.scrollTo);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ── Certificate modal ───────────────────────────────────── */
  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("cert-modal-img");
  const modalClose = document.getElementById("cert-modal-close");

  if (modal && modalImg) {
    document.querySelectorAll(".cert-thumb").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const src = thumb.querySelector("img").src;
        const title = thumb.querySelector("img").alt || "Certificate";
        modalImg.src = src;
        modalImg.alt = title;
        modal.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    });

    const closeModal = () => {
      modal.classList.remove("is-open");
      document.body.style.overflow = "";
      modalImg.src = "";
    };

    modalClose?.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  /* ── Year in footer ──────────────────────────────────────── */
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
