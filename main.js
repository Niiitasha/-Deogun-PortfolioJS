/* NAVIGATION: Toggle between adding and removing the "responsive" class to mainmenu when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "mainmenu") {
        x.className += " responsive";
    } else {
        x.className = "mainmenu";
    }
}
