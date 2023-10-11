let faq = document.querySelectorAll('.p-faq__list');
for(let i = 0; i < faq.length; i++) {
  faq[i].querySelector('h1').addEventListener('click', function(e) {
    e.preventDefault();
    faq[i].classList.toggle('show');
    let show = document.querySelector('.show');
    let img = faq[i].querySelector('img');
    if(show) {
      img.innerHTML = '<img src=xxxx>'

    }
  });
}

