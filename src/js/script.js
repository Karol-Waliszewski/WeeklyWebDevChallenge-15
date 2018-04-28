
const navModule = (function() {
  var $nav = document.getElementById('nav');
  var $burger = document.getElementById('burger');

  var scrollNav = function() {
    let offset = window.scrollY;
    if (offset > 60)
      $nav.classList.add('scroll');
    else
      $nav.classList.remove('scroll');
  };

  var dropdown = function() {
    $nav.classList.toggle('active');
  };

  document.addEventListener('scroll', scrollNav);
  $burger.addEventListener('click', dropdown);
})();

const headerModule = (function() {
  var $button = document.getElementById('header__more');

  var scrollDown = function() {
    var $body = document.querySelector('.clients');
    $button.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
inline: 'start'
    });

  };

  $button.addEventListener('click', scrollDown);
})();
