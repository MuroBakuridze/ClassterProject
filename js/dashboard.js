let btn = document.getElementById('btn')
var leftNav = document.getElementById('leftnav')

let navCallFunc = function () {
  leftNav.classList.toggle("show")
}


btn.addEventListener('click', navCallFunc)

document.getElementById("user-name-id").innerHTML = localStorage.getItem("textvalue");
