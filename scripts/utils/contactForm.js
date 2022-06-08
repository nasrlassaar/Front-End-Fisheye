function displayModal() {
  const mainDOM = document.getElementById("main");
  const modal = document.getElementById("contact_modal");
  mainDOM.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "false");
  modal.style.display = "block";
}

function closeModal() {
  const mainDOM = document.getElementById("main");
  const modal = document.getElementById("contact_modal");
  mainDOM.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-hidden", "true");
  modal.style.display = "none";
}
closeModal();
