//----------------------------------------------------------------------------------
// GLOBAL VARIABLES
//----------------------------------------------------------------------------------
var nav = document.getElementsByTagName('nav')[0];

//resize event listener
window.addEventListener('resize', widthCheck);

function widthCheck(){
  if (document.documentElement.clientWidth > 768) {
      nav.style.height = '75px';
  }
}

//Dropdown
function dropdown() {
    if (nav.style.height != '200px') {
        nav.style.height = '200px';
    } else {
        nav.style.height = '75px';
    }
}
