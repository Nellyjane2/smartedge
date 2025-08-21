const sideBar = document.getElementById("Side-bar");
const navIcon = document.getElementById("nav-icon");

function toggleSideBar() {
  sideBar.classList.toggle("small-sidebar")
  
  if
  (sideBar.classList.contains("small-sidebar")){
    navIcon.className = "fa-solid fa-x";
  } else {
    navIcon.className = "fa-solid fa-bars";
  }

  if
  (sideBar.classList.contains("small-sidebar")){
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }else{
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  }
}


navIcon.addEventListener("click", toggleSideBar);
