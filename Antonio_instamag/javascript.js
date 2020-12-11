var col = document.getElementsByClassName("colonne");

var i;

function iray() {
    for (i = 0; i < col.length; i++) {
    col[i].style.flex = "100%";
  }
}

function roa() {
  for (i = 0; i < col.length; i++) {
    col[i].style.flex = "50%";
  }
}

var header = document.getElementById("lohany");
var btns = document.getElementsByClassName("bokotra");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}