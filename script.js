const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

//Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
  photosArray.forEach((photo) => {
    //Create <a> to link to Unsplash
    const anchorItem = document.createElement("a");
    anchorItem.setAttribute("href", photo.links.html);

    //Create <img> for photos
    const image = document.createElement("img");
    image.setAttribute("src", photo.urls.regular);
    image.setAttribute("alt", photo.alt_description);
    image.setAttribute("title", photo.alt_description);

    //Put <img> inside <a> then both inside ${imageContainer}
    imageContainer.appendChild(anchorItem);
    anchorItem.appendChild(image);
  });
}

//Unsplash API
const apiKey = "rXogb3nNf1uqzcKOnnp7dPDydt8fChP3rglMYADMuA4";
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get Images from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json;
    console.log(photosArray);
    displayPhotos();
  } catch (error) {
    //error
  }
}

getPhotos();
