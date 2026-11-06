const SUN_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
const MOON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>';

// localStorage can throw when storage is blocked (e.g. some private modes).
function loadTheme() {
	try {
		return localStorage.getItem('theme');
	} catch (e) {
		return null;
	}
}

function saveTheme(theme) {
	try {
		localStorage.setItem('theme', theme);
	} catch (e) {
		// Theme still applies for this page view; it just won't persist.
	}
}

(function () {
	const saved = loadTheme();
	if (saved) document.documentElement.setAttribute('data-theme', saved);

	document.addEventListener('DOMContentLoaded', updateThemeButton);
})();

function currentTheme() {
	return document.documentElement.getAttribute('data-theme') || 'dark';
}

function updateThemeButton() {
	const icon = document.querySelector('.theme-toggle .theme-icon');
	if (icon) icon.innerHTML = currentTheme() === 'light' ? MOON_SVG : SUN_SVG;
}

function toggleNav() {
	const open = document.querySelector('.nav-links').classList.toggle('open');
	const btn = document.querySelector('.nav-hamburger');
	if (btn) btn.setAttribute('aria-expanded', String(open));
}

function toggleTheme() {
	const next = currentTheme() === 'light' ? 'dark' : 'light';
	document.documentElement.setAttribute('data-theme', next);
	saveTheme(next);
	updateThemeButton();
}
