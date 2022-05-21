function photographerFactory(data) {
  const { id, name, portrait, city, country, tagline, price } = data;

  // portrait
  const picture = `assets/images/photographers/${portrait}`;
  const img = document.createElement("img");
  img.setAttribute("src", picture);

  // name
  const h2 = document.createElement("h2");
  h2.textContent = name;

  // city, country
  const localisation = document.createElement("div");
  localisation.classList.add("localisation");
  localisation.textContent = `${city}, ${country}`;

  // tagline
  const citation = document.createElement("div");
  citation.classList.add("citation");
  citation.textContent = tagline;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.classList.add("article");
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(localisation);
    article.appendChild(citation);
    article.appendChild(getPhotographerPriceDOM());
    article.onclick = () => {
      document.location.href = "/photographer.html?id=" + id;
    };

    return article;
  }

  function getPhotographerPriceDOM() {
    const div = document.createElement("div");
    div.classList.add("price");
    div.textContent = price + "€/jour";
    return div;
  }

  function getHeaderLeft() {
    const div = document.createElement("div");
    div.appendChild(h2);
    div.appendChild(localisation);
    div.appendChild(citation);
    return div;
  }

  function getHeaderRight() {
    const div = document.createElement("div");
    div.appendChild(img);
    return div;
  }

  return {
    name,
    picture,
    getUserCardDOM,
    getPhotographerPriceDOM,
    getHeaderLeft,
    getHeaderRight,
  };
}
