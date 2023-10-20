// DOM elements
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
const errorMessage = document.getElementById("error-message");

// Variables to manage image loading and Unsplash API data
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Function to check if all images have been loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true; // Hide the loader once all images are loaded
  }
}

// Helper function to set attributes on DOM elements
function setAttribute(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Function to display photos in the DOM
function displayPhotos() {
  errorMessage.style.display = "none"; // Clear the error message when the request is successful

  totalImages = photosArray.length;
  imagesLoaded = 0;

  photosArray.forEach((photo) => {
    // Create <a> element to link to Unsplash
    const anchorItem = document.createElement("a");
    setAttribute(anchorItem, {
      href: photo.links.html,
      target: "_blank",
    });

    // Create <img> element for photos
    const image = document.createElement("img");
    setAttribute(image, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // Add an event listener to check when each image finishes loading
    image.addEventListener("load", imageLoaded);

    // Put <img> inside <a> and both inside the imageContainer
    anchorItem.appendChild(image);
    imageContainer.appendChild(anchorItem);
  });
}

// Unsplash API
const apiKey = "rXogb3nNf1uqzcKOnnp7dPDydt8fChP3rglMYADMuA4";
const count = 30;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Function to get images from the Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data from the API.");
    }
    photosArray = await response.json();
    displayPhotos();
    console.log(photosArray);
  } catch (error) {
    console.error(error);

    // Display an error message to the user
    errorMessage.textContent = "Failed to load images. Please try again later.";
    errorMessage.style.display = "block";

    // Optionally, set a timer to hide the error message after a few seconds
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 5000); // Hide the message after 5 seconds
  }
}

// Check if the user is near the bottom of the page and load more photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos(); // Initial call to getPhotos when the page loads
