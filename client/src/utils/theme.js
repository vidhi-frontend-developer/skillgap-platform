const injectGlobalStyles = (dark) => {
  const id = "sga-theme";

  // Remove old styles
  const existing = document.getElementById(id);
  if (existing) existing.remove();

  // Create new style tag
  const style = document.createElement("style");
  style.id = id;

  style.textContent = `
  
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap');

    :root {
      --primary: #4b5ccb;
      --primary-light: #f63b3b;
      --primary-glow: rgba(255,255,255,0.9);

      --success: #059669;
      --success-light: #10B981;

      --danger: #DC2626;
      --danger-light: #EF4444;

      --bg: ${dark ? "#0e0f32" : "#F8FAFF"};
      --surface: ${dark ? "#0a0a22" : "#FFFFFF"};
      --surface2: ${dark ? "#22263A" : "#EEF2FF"};

      --border: ${
        dark
          ? "rgba(255,255,255,0.07)"
          : "rgba(37,99,235,0.12)"
      };

      --text: ${dark ? "#E8ECF4" : "#0F172A"};

      --muted: ${dark ? "#fff" : "#121922"};

      --card-shadow: ${
        dark
          ? "0 4px 32px rgba(0,0,0,0.45)"
          : "0 4px 24px rgba(37,99,235,0.08)"
      };

      --font-display: "Rubik", sans-serif;
      --font-body: "Rubik", sans-serif;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: var(--font-body);
     background: transparent;
      color: var(--text);
      min-height: 100vh;
      transition: background 0.3s ease,
                  color 0.3s ease;
      line-height: 1.6;
    }

    a {
      text-decoration: none;
    }

    button {
      outline: none;
    }

    /* =========================
       NAVBAR
    ========================== */

    .sga-navbar {
      background: rgba(255,255,255,0.08);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid rgba(255,255,255,0.3);
      padding: 0.85rem 0;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
    }
      .dark .sga-navbar {
  background: rgba(0,0,0,0.3);
}
    .sga-logo {
      font-family: var(--font-display);
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--primary-light);
      border: none;
      background: transparent;
      cursor: pointer;
    }

    .sga-logo span {
      color: var(--text);
    }

    .nav-link-custom {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--muted);
      padding: 0.45rem 0.9rem;
      border-radius: 10px;
      border: none;
      background: transparent;
      cursor: pointer;
      transition: all 0.25s ease;
    }

    .nav-link-custom:hover {
      background: var(--primary-glow);
      color: #000;
    }

    .nav-link-active {
      background: var(--primary-glow);
      color: var(--primary-light);
    }

    /* =========================
       HERO SECTION
    ========================== */

    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding: 8rem 0 4rem;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      background: ${
        dark
          ? "radial-gradient(circle at top right, rgba(37,99,235,0.18), transparent 60%)"
          : "radial-gradient(circle at top right, rgba(37,99,235,0.10), transparent 60%)"
      };
      pointer-events: none;
    }

    .hero-grid {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      opacity: 0.4;
      pointer-events: none;
    }

    .hero-title {
      font-family: var(--font-display);
      font-size: clamp(2.5rem, 5vw, 4.5rem);
      font-weight: 700;
      line-height: 1.1;
    }

    .hero-title .accent {
      color: var(--primary-light);
    }

    .hero-subtitle {
      margin-top: 1.5rem;
      font-size: 1.1rem;
      color: var(--muted);
      max-width: 600px;
      line-height: 1.8;
    }

    /* =========================
       BUTTONS
    ========================== */

    .btn-primary-custom {
      background: linear-gradient(
        135deg,
        var(--primary),
        var(--primary-light)
      );

      border: none;
      color: white;

      padding: 0.8rem 1.8rem;
      border-radius: 14px;

      font-weight: 600;
      font-size: 0.95rem;

      cursor: pointer;

      transition: all 0.25s ease;

      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .btn-primary-custom:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(37,99,235,0.25);
    }

    .btn-ghost {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text);

      padding: 0.75rem 1.5rem;
      border-radius: 14px;

      font-weight: 500;
      cursor: pointer;

      transition: all 0.25s ease;
    }

    .btn-ghost:hover {
      background: var(--surface2);
    }

    /* =========================
       CARD
    ========================== */

    .sga-card {
      background: var(--surface);
      border: 1px solid var(--border);

      border-radius: 22px;

      box-shadow: var(--card-shadow);

      transition: all 0.25s ease;
    }

    .sga-card:hover {
      transform: translateY(-3px);
    }

    /* =========================
       FORMS
    ========================== */

    .form-label-custom {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;

      margin-bottom: 0.6rem;

      color: var(--muted);
    }

    .form-control-custom,
    .form-select-custom {
      width: 100%;

      background: var(--surface2);
      border: 1.5px solid var(--border);

      border-radius: 14px;

      color: var(--text);

      padding: 0.9rem 1rem;

      font-size: 0.95rem;

      transition: all 0.25s ease;
    }

    .form-control-custom:focus,
    .form-select-custom:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
      outline: none;
    }

    .form-control-custom::placeholder {
      color: var(--muted);
      opacity: 0.6;
    }

    /* =========================
       TAGS
    ========================== */

    .tag-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .skill-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;

      padding: 0.4rem 0.9rem;

      border-radius: 999px;

      font-size: 0.8rem;
      font-weight: 600;
    }

    .badge-matched {
      background: rgba(5,150,105,0.12);
      color: var(--success-light);
      border: 1px solid rgba(5,150,105,0.25);
    }

    .badge-missing {
      background: rgba(220,38,38,0.1);
      color: var(--danger-light);
      border: 1px solid rgba(220,38,38,0.2);
    }

    /* =========================
       FOOTER
    ========================== */

    .sga-footer {
      border-top: 1px solid var(--border);
      padding: 2rem 0;
      color: var(--muted);
      font-size: 0.9rem;
    }

    /* =========================
       ANIMATIONS
    ========================== */

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .fade-up {
      animation: fadeUp 0.5s ease both;
    }

    /* =========================
       RESPONSIVE
    ========================== */

    @media (max-width: 768px) {

      .hero-section {
        padding: 7rem 0 3rem;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1rem;
      }

    }

  `;

  document.head.appendChild(style);
};

export default injectGlobalStyles;