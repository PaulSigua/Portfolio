(function () {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = localStorage.getItem('theme');
  const isDark = currentTheme === 'dark' || (!currentTheme && prefersDark);

  if (isDark) { document.documentElement.classList.add('dark')};

  updateToggle();

  window.toggleTheme = function () {
    const isNowDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isNowDark ? 'dark' : 'light');

    updateToggle();
  }

  function updateToggle() {
    const thumb = document.getElementById('theme-toggle-thumb');
    const icon = document.getElementById('theme-icon');
    const isDark = document.documentElement.classList.contains('dark');

    if (thumb && icon) {
      thumb.classList.toggle('translate-x-1', isDark);
      thumb.classList.toggle('translate-x-7', isDark);
      icon.textContent = isDark ? '☀️' : '🌙';
    }
  }
})();