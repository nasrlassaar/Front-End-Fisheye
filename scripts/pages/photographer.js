async function getPhotographer(id) {
  const res = await fetch("data/photographers.json");
  const json = await res.json();

  return json.photographers.find(
    (photographer) => photographer.id === Number(id)
  );
}

async function getMediasOfPhotograph(id) {
  const res = await fetch("data/photographers.json");
  const json = await res.json();

  return json.media.filter((med) => med.photographerId === Number(id));
}

async function displayData(photographer, medias) {
  const photographerHeader = document.querySelector(".photograph-header");
  const contactButton = document.querySelector(".contact_button");
  const main = document.querySelector("#main");

  // Photograph

  const photographerModel = photographerFactory(photographer);

  photographerHeader.insertBefore(
    photographerModel.getHeaderLeft(),
    contactButton
  );
  photographerHeader.appendChild(photographerModel.getHeaderRight());

  // Medias

  const mediasModel = mediasFactory(medias);
  main.appendChild(mediasModel.getSortSelectDOM());
  main.appendChild(mediasModel.getSectionDOM());

  // Info bottomco

  const infoBottom = document.createElement("div");
  infoBottom.classList.add("info-bottom");
  infoBottom.appendChild(mediasModel.getTotalLikesDOM());
  infoBottom.appendChild(photographerModel.getPhotographerPriceDOM());

  main.appendChild(infoBottom);
}

async function init() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  const photographer = await getPhotographer(id);
  const medias = await getMediasOfPhotograph(id);

  if (photographer) {
    displayData(photographer, medias);
  }
}

init();
