(function () {
  const mm = window.matchMedia("(prefers-color-scheme: dark)");

  const COLOR_HEX_MAP = {
    blue: "#3b82f6",
    green: "#22c55e",
    orange: "#f97316",
    purple: "#a855f7",
  };

  function getPref() {
    return localStorage.getItem("theme") || "system";
  }
  function getEffective(pref) {
    return pref === "system" ? (mm.matches ? "dark" : "light") : pref;
  }
  function apply(theme) {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    html.classList.toggle("dark", theme === "dark");
    updateFavicon();
  }

  function getColorPref() {
    return localStorage.getItem("color") || "mono";
  }
  function applyColor(color) {
    if (color && color !== "mono" && color !== "default") {
      document.documentElement.setAttribute("data-color", color);
    } else {
      document.documentElement.removeAttribute("data-color");
    }
    updateFavicon();
  }

  function updateFavicon() {
    const color = getColorPref();
    const effTheme = getEffective(getPref());
    let hex = COLOR_HEX_MAP[color];
    if (!hex) {
      hex = effTheme === "dark" ? "#ffffff" : "#09090b";
    }

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${hex}" d="M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z"/></svg>`;

    const dataUri = "data:image/svg+xml," + encodeURIComponent(svg);
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/svg+xml";
      document.head.appendChild(link);
    }
    link.href = dataUri;
  }

  window.setAppColor = function (color) {
    localStorage.setItem("color", color);
    applyColor(color);
  };

  function updateToggle(effectiveTheme) {
    const thumb = document.getElementById("theme-toggle-thumb");
    const sun = document.getElementById("icon-sun");
    const moon = document.getElementById("icon-moon");
    const btn = document.querySelector('button[onclick="toggleTheme()"]');
    const isDark = effectiveTheme === "dark";

    if (thumb && sun && moon && btn) {
      thumb.classList.toggle("translate-x-1", !isDark);
      thumb.classList.toggle("translate-x-7", isDark);
      sun.classList.toggle("hidden", !isDark);
      moon.classList.toggle("hidden", isDark);
      btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    }

    const icons = document.querySelectorAll(".theme-toggle-icon");
    if (icons.length) {
      const pref =
        document.documentElement.getAttribute("data-theme-pref") ||
        effectiveTheme;
      const showId = pref === "system" ? effectiveTheme : pref;
      icons.forEach((el) => el.classList.toggle("active", el.id === showId));
    }
    const list = document.getElementById("themes-list");
    if (list) {
      const pref =
        document.documentElement.getAttribute("data-theme-pref") ||
        effectiveTheme;
      list.querySelectorAll(".themes-menu-option").forEach((opt) => {
        const checked = opt.getAttribute("data-theme") === pref;
        opt.setAttribute("aria-checked", String(checked));
        opt.querySelector(".check-dot")?.classList.toggle("hidden", !checked);
      });
    }
  }

  (function init() {
    const pref = getPref();
    const eff = getEffective(pref);
    document.documentElement.setAttribute("data-theme-pref", pref);
    apply(eff);
    updateToggle(eff);

    const prefColor = getColorPref();
    applyColor(prefColor);
  })();

  window.toggleTheme = function () {
    const currentEff = document.documentElement.getAttribute("data-theme");
    const next = currentEff === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme-pref", next);
    apply(next);
    updateToggle(next);
  };

  mm.addEventListener("change", () => {
    const pref = getPref();
    if (pref === "system") {
      const eff = getEffective("system");
      document.documentElement.setAttribute("data-theme-pref", "system");
      apply(eff);
      updateToggle(eff);
    }
  });

  window.setThemeExplicit = function (mode) {
    localStorage.setItem("theme", mode);
    document.documentElement.setAttribute("data-theme-pref", mode);

    const eff = getEffective(mode);
    apply(eff);
    updateToggle(eff);
  };
  window.setTheme = window.setThemeExplicit;

  const btn = document.getElementById("theme-toggle-btn");
  const menu = document.getElementById("themes-menu");
  const list = document.getElementById("themes-list");
  const options = list
    ? Array.from(list.querySelectorAll(".themes-menu-option"))
    : [];

  function openMenu() {
    if (!menu) return;
    menu.classList.add("open");
    btn?.setAttribute("aria-expanded", "true");
    const pref = getPref();
    const active = options.find((o) => o.getAttribute("data-theme") === pref);
    (active || options[0])?.focus?.();
  }
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("open");
    btn?.setAttribute("aria-expanded", "false");
    btn?.focus?.();
  }

  if (btn && menu) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.contains("open") ? closeMenu() : openMenu();
    });
    document.addEventListener("click", (e) => {
      if (!menu.classList.contains("open")) return;
      const within =
        e.target === menu || menu.contains(e.target) || e.target === btn;
      if (!within) closeMenu();
    });
    document.addEventListener("keydown", (e) => {
      if (!menu.classList.contains("open")) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
      }
    });
  }

  options.forEach((opt) => {
    opt.addEventListener("click", () => {
      const mode = opt.getAttribute("data-theme");
      if (mode) window.setThemeExplicit(mode);
      closeMenu();
    });
    opt.addEventListener("keydown", (e) => {
      const i = options.indexOf(opt);
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        options[(i + 1) % options.length].focus();
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        options[(i - 1 + options.length) % options.length].focus();
      }
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        opt.click();
      }
    });
  });

  document.addEventListener("astro:after-swap", () => {
    const pref = getPref();
    const eff = getEffective(pref);
    document.documentElement.setAttribute("data-theme-pref", pref);
    apply(eff);
    updateToggle(eff);

    const prefColor = getColorPref();
    applyColor(prefColor);
  });
})();
