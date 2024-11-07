

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility="visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

let audio = document.getElementById("bgm");
function test() {
  
  audio.play();
  popup.classList.add("open-popup");
}

ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

// Section 1
ScrollReveal().reveal('.heading', { delay: 400 , origin : 'left'});
ScrollReveal().reveal('.meeting , .bottom', { delay: 500 , origin : 'bottom'});
ScrollReveal().reveal('.meetingCaption', { delay: 700 , origin : 'right' });

//ScrollReveal().reveal('.wrap img', { delay: 400 , origin : 'bottom' , interval : 200});
ScrollReveal().reveal('.heading2 div', { distance: '20px' ,delay: 400 , origin : 'bottom' , interval :200});

ScrollReveal().reveal('.meetingCaption2', { delay: 400 , origin : 'bottom'});
ScrollReveal().reveal('.bottom2', { delay: 500 , origin : 'bottom'});
