const checkbox = document.getElementById("checkbox");
const currentTheme = localStorage.getItem('theme');

const cardTodayDown = document.querySelectorAll('.card-today--down .card-today__icon');
const cardSmallDown = document.querySelectorAll('.card-small-percentage--down .card-small-percentage__icon');


// if (window.matchMedia("(prefers-color-scheme)").matches) {
//   checkbox.setAttribute("checked", true);
// }

// change src images with class --down
for(let i = 0; i < cardTodayDown.length; i++ ) {
    cardTodayDown[i].src = 'images/icon-down.svg';
}

for(let i = 0; i < cardSmallDown.length; i++ ) {
    cardSmallDown[i].src = 'images/icon-down.svg';
}


// Change theme
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        checkbox.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

checkbox.addEventListener('change', switchTheme, false);