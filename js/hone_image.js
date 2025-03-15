window.addEventListener('scroll', function() {
  const element0 = document.querySelectorAll('.st0');
  const element1 = document.querySelectorAll('.st1');
  
  element0.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight) {
      element.classList.add('animate');
    }
  });

  element1.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight) {
      element.classList.add('animate');
    }
  });


});
