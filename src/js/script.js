const navModule = (function() {
  var $nav = document.getElementById('nav');

  document.addEventListener('scroll', function() {
    let offset = window.scrollY;
    if (offset > 60)
      $nav.classList.add('scroll');
    else
      $nav.classList.remove('scroll');
  });

  document.getElementById('burger').addEventListener('click', function() {
    $nav.classList.toggle('active');
  });
})();
