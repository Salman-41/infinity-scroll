# Photo Gallery Project

**Project Description:**
This project is a simple web application that fetches random photos from the Unsplash API and displays them in a photo gallery. It uses JavaScript to dynamically load and display images as the user scrolls down the page. Additionally, it handles errors gracefully and provides a responsive user experience.

## Features

- Fetches random photos from the Unsplash API using an API key.
- Displays the photos in a responsive grid layout with clickable links to the original photos on Unsplash.
- Implements infinite scrolling, so more images are loaded as the user scrolls down the page.
- Handles API errors and displays an error message to the user.
- Provides an option to hide the error message after a set period.
- Utilizes modern JavaScript features, including `async/await` and `fetch` for efficient data retrieval.

## Project Structure

- **index.html**: The main HTML file with placeholders for the images and the error message.
- **styles.css**: The CSS file to style the gallery layout and appearance.
- **script.js**: The JavaScript file responsible for fetching images, handling scroll events, and displaying photos.

## Getting Started

1. Clone or download the project repository to your local machine.
2. Open the `index.html` file in a web browser to view the photo gallery.

## Usage

- As the page loads, it will automatically fetch and display a set of random photos.
- Scroll down the page to trigger the infinite scroll and load more photos.
- Click on any image to open it in a new tab on the Unsplash website.
- If there are API issues or errors, an error message will be displayed, and it will automatically hide after 5 seconds.

## Customization

You can customize this project by:

- Changing the number of initial and subsequent photos loaded by modifying the `count` variable in the `script.js` file.
- Adjusting the API key in the `apiKey` variable to your own Unsplash API key (make sure to register on the Unsplash website to obtain an API key).
- Modifying the CSS styles in the `styles.css` file to change the layout and appearance of the photo gallery.

## Dependencies

This project relies on the following technologies and resources:

- Unsplash API for fetching random photos.
- HTML, CSS, and JavaScript for creating the web application.

## Credits

- Project created by Salman.
- Inspired by the [Unsplash API](https://unsplash.com/developers) and [Unsplash](https://unsplash.com).

## Contact

For any questions or inquiries, feel free to contact <salman.yz@outlook.com>.
