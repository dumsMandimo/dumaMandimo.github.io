const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('nav ul li');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
  const showOnPx = 100;
  const backToTopButton = document.querySelector(".back-to-top")
  
  const scrollContainer = () => {
    return document.documentElement || document.body;
  };

});
``


