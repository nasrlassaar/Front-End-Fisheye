function mediasFactory(data) {
  function getSectionDOM() {
    const section = document.createElement("div");
    section.classList.add("medias_section");

    data.forEach((media) => {
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

      // Title
      const titleSpan = document.createElement("span");
      titleSpan.classList.add("title");
      titleSpan.textContent = title;
      mediaDiv.appendChild(titleSpan);

      // Likes
      const likesSpan = document.createElement("span");
      likesSpan.classList.add("likes");
      likesSpan.textContent = likes;
      mediaDiv.appendChild(likesSpan);

      section.appendChild(mediaDiv);
    });

    return section;
  }

  return { getSectionDOM };
}
