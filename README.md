# DinoGraphic
This project builds a 3x3 infographic to display dinosaur data and compare it to user inputted human data.

### Project Goals

* Collect human data from the html form and create methods to compare with dino data.

* Generate tiles at random order and append them to the DOM. Each tile includes the species, image and a fact with the exception of 'human' which only includes the name and image

* Collect JSON data asynchronously, storing it in an array for later use. 

### Install and Run

* To preview the project online, commit the project to your github account. Access the index page at. https://github.com/path/to/project/index.html Copy that URL into https://htmlpreview.github.io/

* Alternatively:
```
git clone https://github.com/Tom-OLeary/DinoGraphic
npm install && npm start
(Must be run on a live web browser/localhost server in order to fetch JSON data correctly)
```

### Project Features

- [X] The form contains a button which upon clicking, removes the form
- [X] The Button appends a grid with 9 tiles to the DOM with the Human located in the center
- [X] The Human tile: Displays the name of the person and an image, 
        The Dino tiles: Display the species, an image and a fact, 
        The Bird tile: Displays the species, image, and "All birds are Dinosaurs."

- [X] Validate the form data for completion.
- [X] Allow the user to generate a new infographic.
- [X] Random tile color function.
- [X] Randomize the order of the tiles while keeping the human in the middle.
- [X] Create a hover state on the tiles that displays the rest of the species statistics.

### Files
    > app.js - Backend JavaScript
    > app.css - Styles
    > index.html - View/Form Display
    > dino.json - JSON Formatted Dinosaur Data
    > images/ - Grid Images
    
### Languages
* JavaScript
* HTML/CSS
* JSON

### Acknowledgements
* The Udacity Team for providing the skeleton structure as well as the majority of HTML/CSS code.
