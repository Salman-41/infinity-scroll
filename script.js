//Unsplash API
const apiKey = "rXogb3nNf1uqzcKOnnp7dPDydt8fChP3rglMYADMuA4";
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get Images from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json;
    console.log(data);
  } catch (error) {
    //error
  }
}

getPhotos();
