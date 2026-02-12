/**
Integracion de EmailJS para el formulario
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
      showStatus(
        "Por favor, rellene todos los campos antes de enviar.",
        "error",
      );
      return;
    }

    if (!isValidEmail(email)) {
      showStatus(
        "Por favor, introduce una dirección de correo válida.",
        "error",
      );
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
      showStatus("¡Mensaje enviado! Te responderé pronto.", "success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      showStatus(
        "Algo salió mal. Inténtalo de nuevo o envíame un correo electrónico.",
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
      ? "Enviando…"
      : "Enviar mensaje";
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
