const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

//check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

//Helper function to set Attribute on DOM
function setAttribute(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
  totalImages = photosArray.length;
  imagesLoaded = 0;
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

    //Event Listener, check when each id finished loading
    image.addEventListener("load", imageLoaded);
    //Put <img> inside <a> then both inside ${imageContainer}
    anchorItem.appendChild(image);
    imageContainer.appendChild(anchorItem);
  });
}

//Unsplash API
const apiKey = "rXogb3nNf1uqzcKOnnp7dPDydt8fChP3rglMYADMuA4";
const count = 30;
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

//Check to see if  near bottom of page,Load more Photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});
getPhotos();
