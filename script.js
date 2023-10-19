const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

//Helper function to set Attribute on DOM
function setAttribute(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
  photosArray.forEach((photo) => {
    //Create <a> to link to Unsplash
    const anchorItem = document.createElement("a");
    // anchorItem.setAttribute("href", photo.links.html);
    // anchorItem.setAttribute("target", "_blank");
    setAttribute(anchorItem, {
      href: photo.links.html,
      target: "_blank",
    });

    //Create <img> for photos
    const image = document.createElement("img");
    setAttribute(image, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    //Put <img> inside <a> then both inside ${imageContainer}
    anchorItem.appendChild(image);
    imageContainer.appendChild(anchorItem);
  });
}

//Unsplash API
const apiKey = "rXogb3nNf1uqzcKOnnp7dPDydt8fChP3rglMYADMuA4";
const count = 1;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get Images from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
    console.log(photosArray);
  } catch (error) {
    // error
  }
}

getPhotos();
