function displayCarrousel(currentMediaDOM) {
  const mainDOM = document.getElementById("main");
  const modal = document.getElementById("medias_modal");
  const leftBtn = modal.querySelector(".left_btn");
  const rightBtn = modal.querySelector(".right_btn");
  const contentDOM = modal.querySelector(".media_content");
  const prevMediaDOM = currentMediaDOM.previousSibling;
  const nextMediaDOM = currentMediaDOM.nextSibling;

  mainDOM.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "false");
  modal.style.display = "flex";
  leftBtn.disabled = prevMediaDOM ? false : true;
  rightBtn.disabled = nextMediaDOM ? false : true;

  contentDOM.innerHTML = currentMediaDOM.firstChild.innerHTML;

  leftBtn.onclick = () => {
    displayCarrousel(prevMediaDOM);
  };

  rightBtn.onclick = () => {
    displayCarrousel(nextMediaDOM);
  };
}

function closeCarrousel() {
  const mainDOM = document.getElementById("main");
  const modal = document.getElementById("medias_modal");
  mainDOM.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-hidden", "true");
  modal.style.display = "none";
}

document.addEventListener("keydown", (event) => {
  const modal = document.getElementById("medias_modal");

  if (modal.getAttribute("aria-hidden") === "false") {
    if (event.key === "Escape") {
      closeCarrousel();
    } else if (event.key === "ArrowLeft") {
      modal.querySelector(".left_btn").click();
    } else if (event.key === "ArrowRight") {
      modal.querySelector(".right_btn").click();
    }
  }
});
