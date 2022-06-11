
const dragBtns = document.querySelectorAll(".dragBtn");

dragBtns.forEach((dragBtn) => {
  const drag = (e) => {
    dragBtn.style.top = e.pageY + "px";
    dragBtn.style.left = e.pageX + "px";
  };
  dragBtn.addEventListener("mousedown", () => {
    window.addEventListener("mousemove", drag);
  });

  window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", drag);
  });
});

const audio = new Audio();
audio.src = "paper.mp3";

