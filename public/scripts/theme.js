(function () {
  const mm = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('theme'); // 'light' | 'dark' | 'system' | null

  // devolver 'light' | 'dark' | 'system'
  function getPref() {
    return localStorage.getItem('theme') || 'system';
  }
  // devolver 'light' | 'dark' efectivo
  function getEffective(pref) {
    return pref === 'system' ? (mm.matches ? 'dark' : 'light') : pref;
  }

  // Aplica tokens: SIEMPRE poner data-theme = 'light' | 'dark'
  function apply(theme) {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    html.classList.toggle('dark', theme === 'dark');
  }

  function updateToggle(effectiveTheme) {
    const thumb = document.getElementById('theme-toggle-thumb');
    const sun   = document.getElementById('icon-sun');
    const moon  = document.getElementById('icon-moon');
    const btn   = document.querySelector('button[onclick="toggleTheme()"]');
    const isDark = effectiveTheme === 'dark';

    if (thumb && sun && moon && btn) {
      thumb.classList.toggle('translate-x-1', !isDark);
      thumb.classList.toggle('translate-x-7',  isDark);
      sun.classList.toggle('hidden', !isDark);
      moon.classList.toggle('hidden',  isDark);
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    }

    const icons = document.querySelectorAll('.theme-toggle-icon');
    if (icons.length) {
      const pref = document.documentElement.getAttribute('data-theme-pref') || effectiveTheme; // 'light'|'dark'|'system'
      const showId = (pref === 'system') ? effectiveTheme : pref; // en system usa 'light' o 'dark'
      icons.forEach(el => el.classList.toggle('active', el.id === showId));
    }

    // remarca la opcion seleccionada
    const list = document.getElementById('themes-list');
    if (list) {
      const pref = document.documentElement.getAttribute('data-theme-pref') || effectiveTheme;
      list.querySelectorAll('.themes-menu-option').forEach(opt => {
        const checked = (opt.getAttribute('data-theme') === pref);
        opt.setAttribute('aria-checked', String(checked));
        opt.querySelector('.check-dot')?.classList.toggle('hidden', !checked);
      });
    }
  }

  // inicialización respetando 'system'
  (function init() {
    const pref = getPref();                    // 'light' | 'dark' | 'system'
    const eff  = getEffective(pref);           // 'light' | 'dark'
    document.documentElement.setAttribute('data-theme-pref', pref);
    apply(eff);
    updateToggle(eff);
  })();

  // toggle original (alterna entre light/dark)
  window.toggleTheme = function () {
    const currentEff = document.documentElement.getAttribute('data-theme'); // 'light'|'dark'
    const next = currentEff === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme-pref', next);
    apply(next);
    updateToggle(next);
  };

  // pref = 'system'
  mm.addEventListener('change', () => {
    const pref = getPref();
    if (pref === 'system') {
      const eff = getEffective('system');
      document.documentElement.setAttribute('data-theme-pref', 'system');
      apply(eff);
      updateToggle(eff);
    }
  });

  // API para el menú (elige light/dark/system)
  window.setThemeExplicit = function(mode) {
    // mode: 'light' | 'dark' | 'system'
    localStorage.setItem('theme', mode);
    document.documentElement.setAttribute('data-theme-pref', mode);

    const eff = getEffective(mode);
    apply(eff);          // tokens correctos
    updateToggle(eff);
  };

  // menú: abrir/cerrar, click fuera y teclado
  const btn = document.getElementById('theme-toggle-btn');
  const menu = document.getElementById('themes-menu');
  const list = document.getElementById('themes-list');
  const options = list ? Array.from(list.querySelectorAll('.themes-menu-option')) : [];

  function openMenu() {
    if (!menu) return;
    menu.classList.add('open');
    btn?.setAttribute('aria-expanded', 'true');
    const pref = getPref();
    const active = options.find(o => o.getAttribute('data-theme') === pref);
    (active || options[0])?.focus?.();
  }
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('open');
    btn?.setAttribute('aria-expanded', 'false');
    btn?.focus?.();
  }

  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.contains('open') ? closeMenu() : openMenu();
    });
    document.addEventListener('click', (e) => {
      if (!menu.classList.contains('open')) return;
      const within = e.target === menu || menu.contains(e.target) || e.target === btn;
      if (!within) closeMenu();
    });
    document.addEventListener('keydown', (e) => {
      if (!menu.classList.contains('open')) return;
      if (e.key === 'Escape') { e.preventDefault(); closeMenu(); }
    });
  }

  options.forEach((opt) => {
    opt.addEventListener('click', () => {
      const mode = opt.getAttribute('data-theme'); // 'light' | 'dark' | 'system'
      if (mode) window.setThemeExplicit(mode);
      closeMenu();
    });
    opt.addEventListener('keydown', (e) => {
      const i = options.indexOf(opt);
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); options[(i + 1) % options.length].focus(); }
      if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  { e.preventDefault(); options[(i - 1 + options.length) % options.length].focus(); }
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); opt.click(); }
    });
  });

  // reaplicar tras navegaciones (Astro)
  document.addEventListener('astro:after-swap', () => {
    const pref = getPref();
    const eff  = getEffective(pref);
    document.documentElement.setAttribute('data-theme-pref', pref);
    apply(eff);
    updateToggle(eff);
  });
})();
