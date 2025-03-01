document.addEventListener('DOMContentLoaded', function () {
  let navbar = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;


  if (window.innerWidth <= 1200) {
    setTimeout(() => {
      navbar.classList.add('hidden');
    }, 3000);
  }


  window.addEventListener('scroll', function () {

    if (window.scrollY < lastScrollY) {
      navbar.classList.remove('hidden');

    } else if (window.scrollY > 50) {
      navbar.classList.add('hidden')
    }
    lastScrollY = window.scrollY;
  });




  const source = document.querySelector('.ME').innerHTML;

  const template = Handlebars.compile(source);

  const context = {
    me: 'I’m a developer with 4+ mounths of experience.',


  }

  const compiledHTML = template(context)

  document.getElementById('output').innerHTML = compiledHTML


  const source2 = document.querySelector('.skills').innerHTML;

  const template2 = Handlebars.compile(source2);

  const context2 = {
    skills: 'I make websites using javascript, alongside Bootstrap for styling, and figma for design.',


  }

  const compiledHTML2 = template2(context2)

  document.getElementById('output2').innerHTML = compiledHTML2






});

