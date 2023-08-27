const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


// const mediaQuery = window.matchMedia('(max-width: 425px)')

// const mob = document.querySelectorAll('.m-only');

// if (mediaQuery.matches) {
//   for (let i of mob) {
//     i.classList.add('m-only');
//   };
// };

// const secmediaQuery = window.matchMedia('(min-width: 425px)')

// const dec = document.querySelectorAll('.m-only');

// if (secmediaQuery.matches) {
//   for (let j of dec) {
//     i.classList.remove('m-only');
//   };
// };