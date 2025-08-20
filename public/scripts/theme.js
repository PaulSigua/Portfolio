(function () {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  apply(initialTheme);
  updateToggle(initialTheme);

  window.toggleTheme = function () {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    apply(next);
    localStorage.setItem('theme', next);
    updateToggle(next);
  };

  function apply(theme){
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    html.classList.toggle('dark', theme === 'dark');
  }

  function updateToggle(theme) {
    const thumb = document.getElementById('theme-toggle-thumb');
    const sun   = document.getElementById('icon-sun');
    const moon  = document.getElementById('icon-moon');
    const btn   = document.querySelector('button[onclick="toggleTheme()"]');
    const isDark = theme === 'dark';
    if (!thumb || !sun || !moon || !btn) return;

    thumb.classList.toggle('translate-x-1', !isDark);
    thumb.classList.toggle('translate-x-7',  isDark);

    sun.classList.toggle('hidden', !isDark);
    moon.classList.toggle('hidden',  isDark);

    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }
})();