async function getPhotographer(id) {
  const res = await fetch("data/photographers.json");
  const json = await res.json();

  return json.photographers.find(
    (photographer) => photographer.id === Number(id)
  );
}

async function displayData(photographer) {
  const photographerHeader = document.querySelector(".photograph-header");
  const contactButton = document.querySelector(".contact_button");

  const photographerModel = photographerFactory(photographer);
  const headerLeftDOM = photographerModel.getHeaderLeft();
  const headerRightDOM = photographerModel.getHeaderRight();

  photographerHeader.insertBefore(headerLeftDOM, contactButton);
  photographerHeader.appendChild(headerRightDOM);
}

async function init() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  const photographer = await getPhotographer(id);

  if (photographer) {
    displayData(photographer);
  }
}

init();
