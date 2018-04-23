const navModule = (function() {
  var $nav = document.getElementById('nav');

  document.addEventListener('scroll', function() {
    let offset = window.scrollY;
    if (offset > 60)
      $nav.classList.add('active');
    else
      $nav.classList.remove('active');
  });
})();
