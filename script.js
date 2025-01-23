window.onscroll = () => {
    const nav = document.querySelector('#navbar');
     if(this.scrollY <= 10) nav.className = ''; 
     else nav.className = 'scroll';
     const padding = document.querySelector('#logo');
     if(this.scrollY <= 10) padding.className = ''; 
     else padding.className = 'shrink';
    };

    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}