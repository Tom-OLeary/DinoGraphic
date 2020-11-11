# DinoGraphic
This project builds an infographic that is derived from data that is provided, as well as user input data.

## Project Description from Udacity - Intermediate JavaScript
For the project, you will generate a 3x3 grid of tiles (9 in total) with the human in the center tile. Each title will contain the species, an image, and a fact. For the human tile, you will display the name of the human rather than species and no fact is necessary for the human. When the user clicks to generate the infographic from the form, the grid will appear and the form will be hidden. The facts displayed should be random per dinosaur with an opportunity of displaying at least 6 different types of facts (3 should be from the methods you create). One of the titles should be for a pigeon in which the tile should always display, “All birds are considered dinosaurs.”


### Project Tasks

* Get human data from the html form to build the human object.

* Create at least 3 methods that compare dino data to human data. 

* Generate tiles and append to the DOM. Each Dino title must include at least the species, an image and a fact. The dino fact displayed should be chosen at random from at least 6 options (including your 3 methods). The Human tile must include the user’s name, and the human graphic--no fact is needed. The bird tile should include the species, image, and fact, “All birds are considered dinosaurs.”

* Make certain the grid is not being added until you click the button to submit user data. Additionally, remove the form once the user has clicked to generate the infographic. 

* To preview the final version of this project online, commit the project to your github account. Access the index page at. https://github.com/path/to/project/index.html Copy that URL into https://htmlpreview.github.io/

### Project Requirements

To complete this project, your UI must show the following:

- [X] The form should contain a button which upon clicking, removes the form
- [X] The button should append a grid with 9 tiles to the DOM with the Human located in the center
- [X] The Human tile should display the name of the person and an image, the dino tiles should contain the species, an image and a fact, the bird title should contain the species, image, and "All birds are Dinosaurs."


To complete this project, your backend code must:

- [X] Contain a class and all necessary objects
- [X] Contain at least 3 methods for comparing dinosaurs to the human
- [X] Get user data from the DOM
- [X] Append tiles with object data to DOM

### Optional Add-On Features

- [X] Validate the form data to ensure the data is acceptable and complete.
- [X] Allow the user to generate a new infographic.
- [X] Move the tile colors from CSS to JS for more control --> (Added a random color function).
- [X] Randomize the order of the tiles while keeping the human in the middle.
- [X] Create a hover state on the tiles that displays the rest of the species statistics.

### Files
    > app.js - Backend JavaScript
    > app.css - Styles
    > index.html - View/Form Display
    > dino.json - JSON formatted Dinosaur data
    > images/ - Contains all images used in the project
    
### Languages
* JavaScript
* HTML/CSS
* JSON
