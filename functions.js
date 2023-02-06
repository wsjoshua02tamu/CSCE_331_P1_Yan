
function toggleCSS() {
    var theme = document.getElementById("theme");

    if (theme.getAttribute('href') == 'styles.css') {
        theme.setAttribute('href', 'purple.css');
        localStorage.setItem('style','purple.css');
    } else if (theme.getAttribute('href') == 'purple.css'){
        theme.setAttribute('href', 'styles.css');
        localStorage.setItem('style','styles.css');
    }
   
}

window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    
    // 2 (b) get html style element by ID
    
    // 2 (c) replace href attribute of html element.
    if(localStorage.getItem('style') === null)
    {
        localStorage.setItem('style', 'styles.css');
    }
    document.getElementById("theme").setAttribute('href', localStorage.getItem('style'));
    
    
}