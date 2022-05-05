/******
fetch("http://127.0.0.1:5500/data/photographers.json").then(function (
  response
) {
  if (!response.ok) {
    alert("Erreur");
  } else {
    console.table(response);
  }
});*
const NosPhotographes = document.querySelectorAll("Nos Photographes");
*/
async function getData() {
  const res = await fetch("data/photographers.json");
  const json = await res.json();

  return {
    photographers: [...json.photographers],
    medias: [...json.media],
  };
}

async function getPhotographers() {
  const data = await getData();

  return {
    photographers: [...data.photographers],
  };
}

async function getMedias() {
  const data = await getData();

  return {
    medias: [...data.medias],
  };
}

getMedias().then((medias) => {
  medias.medias.forEach((media) => {
    if (media.photographerId === 243) {
      console.log(media);
    }
  });
});

getPhotographers().then((photographers) => {
  photographers.photographers.forEach((photographer) => {
    if (photographer.id === 243) {
      console.log(photographer);
    }
  });
});
