function mediasFactory(medias) {
  function getLikesDOM(number) {
    const likesSpan = document.createElement("span");
    likesSpan.classList.add("likes");
    likesSpan.textContent = number;

    const heartIcon = document.createElement("i");
    heartIcon.classList.add("fas", "fa-solid", "fa-heart");
    likesSpan.appendChild(heartIcon);

    return likesSpan;
  }

  function getSectionDOM() {
    const section = document.createElement("div");
    section.classList.add("medias_section");

    medias.forEach((media) => {
      const { title, image, video, likes } = media;

      const mediaDiv = document.createElement("div");
      mediaDiv.classList.add("media");

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
          likesDOM.classList.add("liked");
        } else {
          likesDOM.childNodes[0].nodeValue = likes;
          likesDOM.classList.remove("liked");
        }
      };

      mediaDivBottom.appendChild(likesDOM);

      mediaDiv.appendChild(mediaDivBottom);

      section.appendChild(mediaDiv);
    });

    return section;
  }

  function getTotalLikesDOM() {
    const total = medias.reduce((total, media) => total + media.likes, 0);
    return getLikesDOM(total);
  }

  return { getSectionDOM, getTotalLikesDOM };
}
