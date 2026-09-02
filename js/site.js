(function(){
  const BRAND = {
    name: 'Brandwagon Flexipack Private Limited',
    short: 'Brandwagon Flexipack',
    phones: ['+91 88825 77791', '+91 92171 96811'],
    email: 'sales@brandwagonflexipack.com',
    web: 'www.brandwagonflexipack.com',
    office: 'A-27, 1st Floor, Majestic Signia, A Block, Sector 62, Noida, Uttar Pradesh, 201309',
    plant: 'C-42, MG Road, Phase 3, UPSIDC Industrial Area, Hapur, Uttar Pradesh, 245101'
  };
  window.BRANDWAGON = BRAND;

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll('[data-phone]').forEach(el => el.textContent = BRAND.phones.join('  /  '));
  document.querySelectorAll('[data-email]').forEach(el => { el.textContent = BRAND.email; el.href = `mailto:${BRAND.email}`; });
  document.querySelectorAll('[data-office]').forEach(el => el.textContent = BRAND.office);
  document.querySelectorAll('[data-plant]').forEach(el => el.textContent = BRAND.plant);

  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.getAttribute('href') === path || (path === '' && a.getAttribute('href') === 'index.html')) a.classList.add('active');
  });

  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-nav');
  if(menuButton && nav) menuButton.addEventListener('click', () => nav.classList.toggle('open'));
})();
