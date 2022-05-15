async function getPhotographers() {
  const res = await fetch("data/photographers.json");
  const json = await res.json();

  return {
    photographers: [...json.photographers],
  };
}

async function displayData(photographers) {
  const photographerSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographerSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
