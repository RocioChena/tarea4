let number = 0;
let data = [];
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
  button.addEventListener('click', e => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
          titleArea.innerHTML = request.response[number].title;
          contentArea.innerHTML = request.response[number].content;
          videoArea.setAttribute("src", request.response[number].url);
          number == 2 ? number = 0 : number++;
        }
      }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
  })
}
function changeVideo() {
  getData(); 
  button.addEventListener('click', e => { 
      
      titleArea.innerHTML = data[number].title; 
      contentArea.innerHTML = data[number].content; 
      videoArea.setAttribute("src", data[number].url); 
      number == 2 ? number = 0 : number++; 
  });
}
window.onload = changeVideo;