// Adam Bezance - shared site behaviour

// Nav background on scroll
(function () {
  var nav = document.getElementById('mainNav');
  if (!nav) return;
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 30); }
  window.addEventListener('scroll', onScroll);
  onScroll();
})();

// Mobile nav
(function () {
  var toggle = document.getElementById('mobileToggle');
  var menu = document.getElementById('navLinks');
  if (!toggle || !menu) return;
  function closeMenu() {
    menu.classList.remove('open');
    toggle.classList.remove('open');
    document.body.style.overflow = '';
  }
  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    toggle.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
})();

// Scroll reveal
(function () {
  function init() {
    document.querySelectorAll('.reveal').forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('visible');
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0 });
    document.querySelectorAll('.reveal:not(.visible)').forEach(function (el) { observer.observe(el); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  window.addEventListener('load', init);
})();
