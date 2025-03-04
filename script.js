const url = "https://jsonplaceholder.typicode.com/photos";
const photosContainer = document.getElementById("photos-container");
const spinner = document.getElementById("spinner");

spinner.style.display = "block";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    spinner.style.display = "none";
    data.slice(0, 10).forEach((photo) => {
      const photoDiv = document.createElement("div");
      photoDiv.classList.add("photo");
      const photoTitle = document.createElement("h2");
      const photoImage = document.createElement("img");
      const photoButton = document.createElement("button");

      photoTitle.textContent = photo.title;
      photoImage.src = photo.thumbnailUrl;
      photoImage.alt = photo.title;
      photoButton.textContent = "View Fullscreen";

      photoButton.addEventListener("click", () => {
        if (photoDiv.classList.contains("fullscreen")) {
          photoDiv.classList.remove("fullscreen");
          photoButton.textContent = "View Fullscreen";
        } else {
          photoDiv.classList.add("fullscreen");
          photoButton.textContent = "Exit Fullscreen";
        }
      });

      photoDiv.appendChild(photoTitle);
      photoDiv.appendChild(photoImage);
      photoDiv.appendChild(photoButton);
      photosContainer.appendChild(photoDiv);
    });
  })
  .catch((error) => {
    spinner.style.display = "none";
    console.error("Error fetching photos:", error);
  });
