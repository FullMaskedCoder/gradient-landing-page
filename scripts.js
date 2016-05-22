//Dropdown
function dropdown() {
    var nav = document.getElementsByTagName('nav')[0];
    if (nav.style.height != '200px') {
        nav.style.height = '200px';
    } else {
        nav.style.height = '75px';
    }
    // nav.style.height = '200px';
}
