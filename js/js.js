// JavaScript Document
var modal = document.getElementById("myModal");
var btn = document.getElementById("openBtn");
var span = document.getElementsByClassName("close")[0];

// Открыть окно при клике на кнопку
btn.onclick = function() {
  modal.style.display = "block";
}

// Закрыть окно при клике на крестик
span.onclick = function() {
  modal.style.display = "none";
}

// Закрыть окно при клике вне его области
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}