const header = document.querySelector('header')
const home = document.querySelector('.one')
const search  = document.querySelector('.search form')
const portButtons = Array.from(document.querySelectorAll('.taps button:not(.more)'))
const portfolioDivs = Array.from(document.querySelectorAll('.port .container > div'))

portfolioDivs.forEach((div,i)=> div.setAttribute('data-num', i))
portButtons.forEach((b, i)=> b.setAttribute('data-num', i))

function toggleHeader() {
  if (window.pageYOffset >=  home.offsetHeight - header.offsetHeight) {
    header.classList.add('active')
    header.classList.add('overlay')
}else {
  header.classList.remove('active')
  header.classList.remove('overlay')
  }
}

toggleHeader()
window.addEventListener('scroll', toggleHeader)

search.addEventListener('submit', (e) => {
  e.preventDefault()
  window.open(`https://www.google.com/search?q=${e.target.elements.search.value}`)
})

function portfolio() {
  const visibleDiv = document.querySelector('.port .visible')
  const visibleIndex = visibleDiv.dataset.num
  
  portfolioDivs.forEach((div, i)=>{
    if(div.classList.contains(this.innerHTML.toLowerCase())){
      setTimeout(() => {
        div.classList.add('grid')
      }, 200);
      setTimeout(() => {
        div.classList.add('visible')
        div.style.transform = 'translateX(0)'
      }, 400);

        if (i >= visibleIndex){
          visibleDiv.style.transform = 'translateX(-100px)'
          div.style.transform = 'translateX(100px)'
          console.log('if')
        }else {
          visibleDiv.style.transform = 'translateX(100px)'
          div.style.transform = 'translateX(-100px)'
          console.log(visibleDiv)
          console.log('else')
        }

      
    }else {
      div.classList.remove('visible')
      setTimeout(() => {
        div.classList.remove('grid');
        div.style.transform = 'translateX(0)'
      }, 200);
      }
  })
}


  portButtons.forEach(e => e.addEventListener('click', portfolio))