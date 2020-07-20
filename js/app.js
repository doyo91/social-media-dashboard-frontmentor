const checkbox = document.getElementById("checkbox");
const currentTheme = localStorage.getItem('theme');

// if (window.matchMedia("(prefers-color-scheme)").matches) {
//   checkbox.setAttribute("checked", true);
// }

// checkbox.addEventListener("change", function (event) {
//   document.body.classList.toggle("is-dark-mode");
// });



if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
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