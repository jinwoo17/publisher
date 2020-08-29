var p;
window.onload = function() {
  p = document.getElementById('p');
  p.onmouseover = over;
  p.onmouseout = out;
}

function over() {
  p.style.backgroundColor = "#8fc425";
}
function out() {
  p.style.backgroundColor = "#fff";
}
