/**
 * contact.js – EmailJS contact form integration.
 *
 * ─────────────────────────────────────────────
 *  SETUP INSTRUCTIONS
 * ─────────────────────────────────────────────
 *  1. Create a free account at https://www.emailjs.com
 *  2. Add an Email Service (Gmail, Outlook, etc.)
 *  3. Create an Email Template with these variables:
 *       {{from_name}}  – sender's name
 *       {{from_email}} – sender's email
 *       {{subject}}    – message subject
 *       {{message}}    – message body
 *  4. Replace the three placeholder values below:
 *       EMAILJS_SERVICE_ID  → your Service ID  (e.g. "service_abc123")
 *       EMAILJS_TEMPLATE_ID → your Template ID (e.g. "template_xyz789")
 *       EMAILJS_PUBLIC_KEY  → your Public Key  (found in Account > API Keys)
 * ─────────────────────────────────────────────
 */

const EMAILJS_SERVICE_ID = "service_61xr69w";
const EMAILJS_TEMPLATE_ID = "template_z2bhoug";
const EMAILJS_PUBLIC_KEY = "uvbawl3VUYRb_zmKC";

document.addEventListener("DOMContentLoaded", () => {
  // Initialise EmailJS SDK with your public key
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const statusEl = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // ── Basic client-side validation ──────────────
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const subject = form.querySelector("#subject").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name || !email || !subject || !message) {
      showStatus("Please fill in all fields before sending.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showStatus("Please enter a valid email address.", "error");
      return;
    }

    // ── Disable button & show loading state ───────
    setLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
      );
      showStatus("Message sent! I'll get back to you soon 🚀", "success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      showStatus(
        "Something went wrong. Please try again or email me directly.",
        "error",
      );
    } finally {
      setLoading(false);
    }
  });

  /* ── Helpers ──────────────────────────────────────────────── */

  function showStatus(msg, type) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.className = `form-status ${type}`;
    // Auto-hide success after 6 s
    if (type === "success") {
      setTimeout(() => {
        statusEl.className = "form-status";
      }, 6000);
    }
  }

  function setLoading(isLoading) {
    if (!submitBtn) return;
    submitBtn.disabled = isLoading;
    submitBtn.querySelector(".btn-text").textContent = isLoading
      ? "Sending…"
      : "Initialize Transmission";
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
