ScrollReveal({ 
  reset: true,
  distance :'80px',
  duration:2000,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .foto-box, .contact-form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content h1 , .about-content h1, .foto-box, .about-content h3', {origin: 'right'});
var typed = new Typed(".animasi",{
  strings: ['orang cina','orang tampan','calon akmil','calon bos muda','youTuber'],
  typeSpeed:100,
  backSpeed:100,
  backDelay: 1000,
  loop: true
});
var typed = new Typed(".percobaa",{
strings: ['Smk-Alghifari','XII RPL2',],
  typeSpeed:100,
  backSpeed:100,
  backDelay: 1000,
  loop: true
});