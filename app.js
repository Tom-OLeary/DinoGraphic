/**
 * Tom O'Leary
 * Project - Dinosaurs
 * This project displays a 3x3 grid infographic derived from provided dinosaur and user inputted data
 * --> app.js
 */

 /**
  * @description - Collects Dino Data from JSON File Asynchronously
  */
 var dinos;
 (async () => {
     try {
         dinos = await fetch("./dino.json")
         .then((result) => result.json())
         .then((result) => result.Dinos);
     } catch {
         console.log("Could Not Fetch Data");
     }
 })();
 
 /**
  * @description - Represents a Dinosaur
  * @constructor 
  * @param {string} image - An image of the dinosaur
  * @param {string} species - The species of dinosaur
  * @param {number} weight - Weight in pounds of dinosaur
  * @param {number} height - Height in inches of dinosaur
  * @param {string} diet - Diet type of dinosaur
  * @param {string} where - Where the dinosaur had lived
  * @param {string} when - During which period the dinosaur existed
  * @param {string} fact - A fact about the dinosaur
  */ 
 // Create Dino Constructor
 function Dino(image, species, weight, height, diet, where, when, fact) {
     this.image = image;
     this.species = species;
     this.weight = weight;
     this.height = height;
     this.diet = diet;
     this.where = where;
     this.when = when;
     this.fact = fact;
 }
 
 /**
  * @description - Create Dino Compare Method 1 --> Compares Weight (Dino Prototype)
  * @param {Human} human - Human object
  * @returns {string} Weight comparison result
  */
 // NOTE: Weight in JSON file is in lbs, height in inches.
 Dino.prototype.compareWeight = function ({ weight }) {
     let comparison = this.weight / weight;
 
     const isHeavier = () => comparison >= 1;

     const message = isHeavier()
     ? `You are ~1/${Math.round(comparison)} the weight of the ${this.species}`
     : `You are ~${(1 - comparison.toFixed(2)) * 100} % heavier than the ${this.species}`;
 
    //  const message = isHeavier()
    //      ? "You are ~1/" + Math.round(comparison) + " the weight of the " + this.species
    //      : "You are ~" + (1 - comparison.toFixed(2)) * 100 + "% heavier than the " + this.species;
 
     return message;
 }
 
 /**
  * @description - Create Dino Compare Method 2 --> Compares Height (Dino Prototype)
  * @param {Human} human - Human object
  * @returns {string} Height comparison result
  */ 
 Dino.prototype.compareHeight = function (human) {
     let dinoHeight = this.height; // Height in inches
     let { feet, inches } = human;
 
     let heightDifference = Math.abs(dinoHeight - (feet * 12 + inches));
     let dinoFeetVal = Math.floor(dinoHeight / 12);
     let dinoInchRemainder = dinoHeight % 12; // Calculates remaining inches when converting to feet

     let message = `At ${dinoFeetVal}' ${dinoInchRemainder}" tall, the ${this.species} has a difference of 
            ${heightDifference} inches in height`;
    
     return message;
 }
 
 /** 
 * @description - Create Dino Compare Method 3 --> Compares Diet (Dino Prototype)
 * @param {Human} human - Human object
 * @returns {string} Diet comparison result
 */
 Dino.prototype.compareDiet = function ({ diet }) {
     let humanDiet = diet.toLowerCase();
     let dinoDiet = this.diet;
     let dinoSpecies = this.species;
 
     let hasSameDiet = () => humanDiet === dinoDiet;
 
     const message = hasSameDiet()
         ? "You have the same diet type as the " + dinoSpecies + ": " + dinoDiet + "!"
         : "The " + dinoSpecies + " is a(n) " + dinoDiet + " while you are a(n) " + humanDiet + "!";
 
     return message;
 }
 
 /** 
  * @description Represents a Bird
  * @constructor 
  * @param {string} image - An image of the bird
  * @param {string} species - The species of bird
  * @param {number} weight - Weight in pounds of bird
  * @param {number} height - Height in inches of bird
  * @param {string} diet - Diet type of bird
  * @param {string} where - Where the bird had lived/lives
  * @param {string} when - During which period the bird existed
  * @param {string} fact - A fact about the bird
  */  
 // Bird inherits from Dino
 function Bird(image, species, weight, height, diet, where, when, fact) {
     Dino.call(this, image, species, weight, height, diet, where, when, fact);
 }
 
 Bird.prototype = Object.create(Dino.prototype);
 Bird.prototype.constructor = Bird;
 
 
 /** 
  * @description Represents a Human
  * @constructor 
  * @param {string} image - A human figured image
  * @param {string} species - The name of the human
  * @param {number} weight - Weight in pounds of human
  * @param {number} height - Height in inches of human
  * @param {string} diet - Diet type of human
  */ 
 function Human(image, species, weight, height, diet) {
     this.image = image;
     this.species = species;
     this.weight = weight;
     Object.assign(this, height);
     this.diet = diet;
 }
 
 /**
  * @description - Create Dino Objects and Randomize Order
  * @returns {Array} Object array
  */
 /* Create Dino Objects */
 function setDinos() {
     let tileArray = [];
     let dinosaurs;
 
     dinos.forEach(function (dino) {
         if (dino.species !== "Pigeon"){
             dinosaurs = dinos.map((dino) => new Dino(
                 `images/${dino.species.toLowerCase()}.png`, dino.species, dino.weight, dino.height, 
                 dino.diet, dino.where, dino.when, dino.fact));
         } else {
             dinosaurs = dinos.map((dino) => new Bird(
                 `images/${dino.species.toLowerCase()}.png`, dino.species, dino.weight, dino.height, 
                 dino.diet, dino.where, dino.when, dino.fact));
         }
     });
 
     while (dinosaurs.length !== 0) {
         let randomIndex = Math.floor(Math.random() * dinosaurs.length);
         tileArray.push(dinosaurs[randomIndex]);
         dinosaurs.splice(randomIndex, 1);
     }
     // Keeps human tile in center of grid
     tileArray.splice(4, 0, human);
 
     return tileArray;
 }
 
 /* Create Human Object */
 let human = new Human(
     "images/human.png",
     "",
     0,
     0,
     ""
 );
 
 /**
  * @description - Create a series of facts to be randomly selected
  * @param {Object} dino - Dino, Bird or Human object
  * @returns {string} Returns one of the available facts
  */
 function randomize(dino) {
     let { species, diet, weight, height, where, when, fact } = dino;
     let obj = dino.constructor.name;
     let message, facts;
 
     if (obj !== "Human") {
         const w = "The " + species + " weighs " + weight + "lbs!",
             h = "The " + species + " is " + height + " inches tall!",
             d = "Diet: " + diet,
             wh = "The " + species + " could be found in " + where,
             whn = "The " + species + " existed during the " + when + " period",
             f = fact,
             wc = dino.compareWeight(human),
             hc = dino.compareHeight(human),
             dc = dino.compareDiet(human);
             facts = [w, h, d, wh, whn, f, wc, hc, dc];
     }
 
 
     // Bird always returns its designated fact, Human returns no fact
     switch (obj) {
        //  case "Bird":
        //      message = fact
        //      break
         case "Human":
             message = ""
             break
         default:
             message = facts[Math.floor(Math.random() * facts.length)]
             break
     }
     return message;
 }    
 
 /**
  * @description - Generate Tiles for each Dino in Array
  * @param {Object} dino - Dino, Bird or Human object
  */
 function generateTiles(dino){
     let { species, image, weight, height, diet, where, when, fact } = dino;
     let elements = ['div', 'h3', 'img', 'p', 'p'];
     let [gridTile, speciesType, imageSource, randomFact, hoverEffect] = elements.map(e => document.createElement(e));
 
     // Generate HTML
     gridTile.className = "grid-item";
     gridTile.style.backgroundColor = setColor(); // Sets random color
     speciesType.innerHTML = species;
     imageSource.src = image;
     randomFact.innerHTML = randomize(dino);
 
     // Adds all facts to hover effect
     if (dino.constructor.name != "Human") {
         hoverEffect.className = "hover-data";
         hoverEffect.innerHTML = "Species: " + species + "<br />"
                             + "Weight: " + weight + " pounds" + "<br />"
                             + "Height: " + height + " inches" + "<br />"
                             + "Diet: " + diet + "<br />"
                             + "Where: " + where + "<br />"
                             + "When: " + when + "<br />"
                             + "Fact: " + fact;
     }
 
     gridTile.append(speciesType, imageSource, randomFact, hoverEffect);
 
     document.getElementById("grid").appendChild(gridTile);
 }
 
 /**
  * @description - Validates the form
  * @returns {boolean} - Checks for missing fields
  */
 function validateForm() { 
     let formIds = ["name", "feet", "inches", "weight"];
     let [name, feet, inches, weight] = formIds.map(id => document.getElementById(id));

 
     if (name.value === "") {
         alert("Please enter a name!");
         name.focus();
         return false;
     }
 
     if (feet.value === "") {
         alert("Please enter feet value!");
         feet.focus();
         return false;
     }
 
     if (inches.value === "") {
         alert("Please enter inches value!");
         inches.focus();
         return false;
     }
 
     if (weight.value === "") {
         alert("Please enter a weight!");
         weight.focus();
         return false;
     }
 
     return true;
 }
 
 /**
  * @description - Add tiles to DOM
  */
 const addTiles = () => setDinos().forEach(generateTiles);
 
 /**
  * @description - Removes form from view
  */
 const removeForm = () => document.getElementById("dino-compare").style.display = "none";
 
 /**
  * @description - Sets a random color value
  * @returns {string} Hex value
  */
 const setColor = () => "#" + parseInt(Math.random() * 0xffffff).toString(16);
 
 /**
  * @description - Displays infographic 'onclick' when the Compare Me! button is pressed
  */
 document.getElementById("btn").onclick = function () {
     human.species = document.getElementById("name").value;
     human.weight = document.getElementById("weight").value;
     human.feet = document.getElementById("feet").value;
     human.inches = document.getElementById("inches").value;
     human.diet = document.getElementById("diet").value;
 
     if (validateForm()) {
         removeForm();
         addTiles();
     }
 }
