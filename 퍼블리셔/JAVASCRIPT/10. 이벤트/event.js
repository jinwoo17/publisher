      var p;

      window.onload = function() {
        p = document.getElementById('p');
        p.onmouseover = over;
        p.onmouseout = out;
      }
      function over() {
        p.style.background = "#8fc425";
      }
      function out() {
        p.style.background = "#fff";
      }
