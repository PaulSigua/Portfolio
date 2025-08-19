(function () {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', initialTheme);

  updateToggle(initialTheme);

  window.toggleTheme = function () {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    updateToggle(next);
  }

  function updateToggle(theme) {
    const thumb = document.getElementById('theme-toggle-thumb');
    const icon = document.getElementById('theme-icon');
    const isDark = theme === 'dark';

    if (thumb && icon) {
      thumb.classList.toggle('translate-x-1', !isDark);
      thumb.classList.toggle('translate-x-7', isDark);
      icon.textContent = isDark ? '☀️' : '🌙';
    }
  }
})();