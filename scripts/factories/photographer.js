function photographerFactory(data) {
  const { id, name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  // portrait
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
  // price
  const adr = document.createElement("div");
  adr.classList.add("adr");
  adr.textContent = price + "€/jour";

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(localisation);
    article.appendChild(citation);
    article.appendChild(adr);

    article.onclick = function () {
      document.location.href = "/photographer.html?id=" + id;
    };

    return article;
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

  return { name, picture, getUserCardDOM, getHeaderLeft, getHeaderRight };
}
