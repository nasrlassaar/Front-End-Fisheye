const LIKES = "likes";
const DATE = "date";
const TITLE = "title";

const SORT_OPTIONS = [
  { name: "Popularité", value: "likes" },
  { name: "Date", value: "date" },
  { name: "Titre", value: "title" },
];

function mediasFactory(medias) {
  const section = document.createElement("div");
  section.classList.add("medias_section");

  let totalLikes = medias.reduce((total, media) => total + media.likes, 0);
  const totalLikesDOM = getLikesDOM(totalLikes);

  function getLikesDOM(number) {
    const likesSpan = document.createElement("span");
    likesSpan.classList.add("likes");
    likesSpan.textContent = number;

    const heartIcon = document.createElement("i");
    heartIcon.classList.add("fas", "fa-solid", "fa-heart");
    likesSpan.appendChild(heartIcon);

    return likesSpan;
  }

  //fonction des filtres
  function getSortSelectDOM() {
    const selectId = "sort-select";

    const label = document.createElement("label");
    label.textContent = "Trier par";
    label.setAttribute("for", selectId);

    const select = document.createElement("select");
    select.setAttribute("id", selectId);

    select.onchange = (event) => {
      sortMediasBy(event.target.value);
    };

    for (const opt of SORT_OPTIONS) {
      const option = document.createElement("option");
      option.textContent = opt.name;
      option.setAttribute("value", opt.value);

      select.appendChild(option);
    }

    const div = document.createElement("div");
    div.setAttribute("class", "sort-select-wrapper");
    div.appendChild(label);
    div.appendChild(select);

    return div;
  }

  function getMediaFromDiv(element) {
    const mediaId = Number(element.getAttribute("data-id"));
    return medias.find((media) => media.id === mediaId);
  }

  function sortMediasBy(prop) {
    [...section.children]
      .sort((elementA, elementB) => {
        const mediaA = getMediaFromDiv(elementA);
        const mediaB = getMediaFromDiv(elementB);

        if (prop === LIKES) {
          return mediaB.likes - mediaA.likes;
        } else if (prop === DATE) {
          return mediaB.date.localeCompare(mediaA.date);
        }
        return mediaA.title.localeCompare(mediaB.title);
      })
      .forEach((element) => section.appendChild(element));
  }

  function getSectionDOM() {
    const mediaSortedByLikes = medias.sort((a, b) => b.likes - a.likes);

    mediaSortedByLikes.forEach((media) => {
      const { id, title, image, video, likes } = media;

      const mediaDiv = document.createElement("div");
      mediaDiv.setAttribute("class", "media");
      mediaDiv.setAttribute("data-id", id);

      // Image / Video
      const mediaWrapper = document.createElement("div");
      mediaWrapper.classList.add("media_wrapper");

      if (image) {
        const imageSrc = `assets/images/medias/${image}`;
        const img = document.createElement("img");
        img.setAttribute("src", imageSrc);

        mediaWrapper.appendChild(img);
      } else if (video) {
        const videoSrc = `assets/images/medias/${video}`;
        const videoDOM = document.createElement("video");
        const sourceDOM = document.createElement("source");

        videoDOM.appendChild(sourceDOM);

        videoDOM.setAttribute("controls", "controls");

        sourceDOM.setAttribute("src", videoSrc);
        sourceDOM.setAttribute("type", "video/mp4");

        mediaWrapper.appendChild(videoDOM);
      }
      mediaDiv.appendChild(mediaWrapper);

      const mediaDivBottom = document.createElement("div");
      mediaDivBottom.classList.add("bottom");

      // Title
      const titleSpan = document.createElement("span");
      titleSpan.classList.add("title");
      titleSpan.textContent = title;
      mediaDivBottom.appendChild(titleSpan);

      // Likes
      const likesDOM = getLikesDOM(likes);

      likesDOM.onclick = () => {
        const currentLikes = Number(likesDOM.textContent);
        if (currentLikes === likes) {
          likesDOM.childNodes[0].nodeValue = likes + 1;
          totalLikes += 1;
          likesDOM.classList.add("liked");
        } else {
          likesDOM.childNodes[0].nodeValue = likes;
          likesDOM.classList.remove("liked");
          totalLikes -= 1;
        }

        totalLikesDOM.childNodes[0].nodeValue = totalLikes;
      };

      mediaDivBottom.appendChild(likesDOM);

      mediaDiv.appendChild(mediaDivBottom);

      section.appendChild(mediaDiv);
    });

    return section;
  }

  function getTotalLikesDOM() {
    return totalLikesDOM;
  }

  return { getSectionDOM, getTotalLikesDOM, getSortSelectDOM };
}
