const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    //Toggle nav
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');  
    });
    //Animate links
   
}

navSlide();