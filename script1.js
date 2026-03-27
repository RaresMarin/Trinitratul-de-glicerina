function nu(){
  const elements = document.querySelectorAll(".AU");

  let i = 0;

  elements.forEach(el => el.style.display = "none");
  elements[0].style.display = "block";

  setInterval(() => {
    elements[i].style.display = "none";
    i = (i + 1) % elements.length;
    elements[i].style.display = "block";
  }, 15000);}
nu();