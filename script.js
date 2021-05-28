const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const toggleEl = document.querySelector('.toggle');
const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function toggleButton() {
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);

toggleEl.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode';
        document.getElementById("logo").src = "images/logo.png";
    }else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode';
        document.getElementById("logo").src = "images/logo_dark.png";
    }
});



function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    }

    if (boxTop > triggerBottom) {
      box.classList.remove('show');
    }
  });
}
