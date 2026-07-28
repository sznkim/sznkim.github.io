const menuButton = document.querySelector('.menu-button');
if (menuButton) {
  menuButton.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.sidebar a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => document.body.classList.remove('menu-open'));
});

const toggleNews = document.getElementById('toggle-news');
const newsList = document.getElementById('news-list');
if (toggleNews && newsList) {
  toggleNews.addEventListener('click', () => {
    const expanded = newsList.classList.toggle('expanded');
    toggleNews.textContent = expanded ? 'Show less' : 'Show all';
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
