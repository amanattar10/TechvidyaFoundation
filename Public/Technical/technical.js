
var menu = document.getElementById("menu");
var item = document.getElementById("nav")

menu.onclick = function () {
    item.style.display = item.style.display === "block" ? "none" : "block";
}