//제어할 비디오 변수 선언
var video = document.getElementById('video');
//버튼 변수 선언
var btn = document.querySelector('button');

var play = true; //정지,재생을 위한 변수
btn.onclick = function() {
  if (play==false) {
    video.play();
    btn.innerText="||";
    play = true;
  }
  else {
    video.pause(); //비디오 정지
    btn.innerText="▶";
    play = false;
  }
}
