const body = document.querySelector("body");
const mouse = document.querySelector(".mouse");

console.log(mouse);

body.addEventListener("mousemove", (e) => {
  console.log(e)

const pX = e.pageX ;
const pY = e.pageY ;

  mouse.style.left = pX + "px";
  mouse.style.top = pY + "px";
});
