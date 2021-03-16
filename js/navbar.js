function toggleNav() {
    if (document.getElementById("mySidenav").style.width == "250px") {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("closeSidenav").style.display = "flex";
        document.getElementById("contant").style.marginLeft = "5rem";

    } else {
        document.getElementById("closeSidenav").style.display = "none";
        document.getElementById("mySidenav").style.width = "250px";   
        document.getElementById("contant").style.marginLeft = "250px";
    
    }
}