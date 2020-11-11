/**
 * Tom O'Leary
 * Project - Dinosaurs
 * This project displays a 3x3 grid infographic derived from provided dinosaur and user inputted data
 * --> app.js
 */

/**
 * @description Represents a Dinosaur
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
// Both Bird and Human inherit from Dino
function Bird(image, species, weight, height, diet, where, when, fact) {
    Dino.call(this, image, species, weight, height, diet, where, when, fact);
}

/** 
 * @description Represents a Human
 * @constructor 
 * @param {string} image - A human figured image
 * @param {string} species - The name of the human
 * @param {number} weight - Weight in pounds of human
 * @param {number} height - Height in inches of human
 * @param {string} diet - Diet type of human
 * @param {string} where - Where the human lives
 * @param {string} when - During which period the human existed
 * @param {string} fact - A fact about the human
 */ 
function Human(image, species, weight, height, diet, where, when, fact) {
    Dino.call(this, image, species, weight, height, diet, where, when, fact)
}
    
/* Create Dino Objects */

// Triceratops
const triceratops = new Dino(
    "images/triceratops.png",
    "Triceratops",
    13000,
    114,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "First discovered in 1889 by Othniel Charles Marsh"
);

// Tyrannasaurus Rex
const tRex = new Dino(
    "images/tRex.png",
    "Tyrannosaurus Rex",
    11905,
    144,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "The largest known skull measures in at 5 feet long."
);

// Anklyosaurus
const anklyo = new Dino(
    "images/anklyosaurus.png",
    "Anklyosaurus",
    10500,
    55,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "Anklyosaurus survived for approximately 135 million years."
);

// Brachiosaurus
const brachio = new Dino(
    "images/brachiosaurus.png",
    "Brachiosaurus",
    70000,
    372,
    "herbavor",
    "North America",
    "Late Jurasic",
    "An asteroid was named 9954 Brachiosaurus in 1991."
);

// Stegosaurus
const stego = new Dino(
    "images/stegosaurus.png",
    "Stegosaurus",
    11600,
    79,
    "herbavor",
    "North America, Europe, Asia",
    "Late Jurasic to Early Cretaceous",
    "The Stegosaurus had between 17 and 22 separate places and flat spines."
);

// Elasmosaurus
const elasmo = new Dino(
    "images/elasmosaurus.png",
    "Elasmosaurus",
    16000,
    59,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Elasmosaurus was a marine reptile first discovered in Kansas."
);

// Pteranodon
const pteranodon = new Dino(
    "images/pteranodon.png",
    "Pteranodon",
    44,
    20,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Actually a flying reptile, the Pteranodon is not a dinosaur."
);

// Pigeon
const pigeon = new Bird(
    "images/pigeon.png",
    "Pigeon",
    0.5,
    9,
    "herbavor",
    "World Wide",
    "Holocene",
    ["All birds are living dinosaurs."]
);

/* Create Human Object */
const human = new Human(
    "images/human.png",
    document.getElementById("name"),
    document.getElementById("weight"),
    document.getElementById("height"),
    document.getElementById("diet"),
    "",
    "",
    "",
    ""
);

/**
 * @description - Create a series of facts to be randomly selected
 * @param {Object} dino - Dino, Bird or Human object
 * @returns {string} Returns one of the available facts
 */
function randomize(dino) {
    let w = "The " + dino.species + " weighs " + dino.weight + "lbs!",
        h = "The " + dino.species + " is " + dino.height + " inches tall!",
        d = "Diet: " + dino.diet,
        wh = "The " + dino.species + " could be found in " + dino.where,
        whn = "The " + dino.species + " existed during the " + dino.when + " period",
        f = dino.fact,
        wc = weightComparison(dino),
        hc = heightComparison(dino),
        dc = compareDiet(dino);

    const facts = [w, h, d, wh, whn, f, wc, hc, dc];
    let message;
    let obj = dino.constructor.name;

    // Bird always returns its designated fact, Human returns no fact
    switch (obj) {
        case "Bird":
            message = dino.fact
            break
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
 * @description - Create Dino Compare Method 1 --> Compares Weight
 * @param {Object} dino - Dino, Bird or Human object
 * @returns {string} Weight comparison result
 */
// NOTE: Weight in JSON file is in lbs, height in inches. 
function weightComparison(dino) {
    let humanLbs = human.weight.value;
    let dinoLbs = dino.weight;
    let comparison = dinoLbs / humanLbs;

    let isHeavier = () => comparison >= 1;

    const message = isHeavier()
        ? "You are ~1/" + Math.round(comparison) + " the weight of the " + dino.species
        : "You are ~" + (1 - comparison.toFixed(2)) * 100 + "% heavier than the " + dino.species;

    return message;
}
    
/**
 * @description - Create Dino Compare Method 2 --> Compares Height
 * @param {Object} dino - Dino, Bird or Human object
 * @returns {string} Height comparison result
 */ 
function heightComparison(dino) {
    let dinoHeight = dino.height; // Height in inches
    let humanFeetVal = document.getElementById("feet").value;
    let humanInchVal = document.getElementById("inches").value;
    let humanInchTotal = humanFeetVal * 12 + humanInchVal;
    let heightDifference = Math.abs(dinoHeight - humanInchTotal);
    let dinoFeetVal = Math.floor(dinoHeight / 12);
    let dinoInchRemainder = dinoHeight % 12; // Calculates remaining inches when converting to feet
    let message = "At " + dinoFeetVal + "' " + dinoInchRemainder + "\"" + " tall, the " 
                + dino.species + " has a difference of " + heightDifference + " inches in height";

    return message;
}
    
/** 
* @description - Create Dino Compare Method 3 --> Compares Diet 
* @param {Object} dino - Dino, Bird or Human object
* @returns {string} Diet comparison result
*/
function compareDiet(dino) {
    let humanDiet = human.diet.value.toLowerCase();
    let dinoDiet = dino.diet;
    let dinoSpecies = dino.species;

    let hasSameDiet = () => humanDiet === dinoDiet;

    const message = hasSameDiet()
        ? "You have the same diet type as the " + dinoSpecies + ": " + dinoDiet + "!"
        : "The " + dinoSpecies + " is a(n) " + dinoDiet + " while you are a(n) " + humanDiet + "!";

    return message;
}

/**
 * @description - Generate Tiles for each Dino in Array
 * @param {Object} dino - Dino, Bird or Human object
 */
function generateTiles(dino){
    let gridTile = document.createElement("div");
    let speciesType = document.createElement("h3");
    let imageSource = document.createElement("img");
    let randomFact = document.createElement("p");
    let hoverEffect = document.createElement("p");

    // Generate HTML
    gridTile.className = "grid-item";
    gridTile.style.backgroundColor = setColor(); // Sets random color
    speciesType.innerHTML = dino.species;
    imageSource.src = dino.image;
    randomFact.innerHTML = randomize(dino);

    // Adds all facts to hover effect
    if (dino.constructor.name != "Human") {
        hoverEffect.className = "hover-data";
        hoverEffect.innerHTML = "Species: " + dino.species + "<br />"
                            + "Weight: " + dino.weight + " pounds" + "<br />"
                            + "Height: " + dino.height + " inches" + "<br />"
                            + "Diet: " + dino.diet + "<br />"
                            + "Where: " + dino.where + "<br />"
                            + "When: " + dino.when + "<br />"
                            + "Fact: " + dino.fact;
    }

    gridTile.appendChild(speciesType);
    gridTile.appendChild(imageSource);
    gridTile.appendChild(randomFact);
    gridTile.appendChild(hoverEffect);

    document.getElementById("grid").appendChild(gridTile);
}

/**
 * @description - Validates the form
 * @returns {boolean} - Checks for missing fields
 */
function validateForm() {
    let name = document.getElementById("name");
    let feet = document.getElementById("feet");
    let inches = document.getElementById("inches");
    let weight = document.getElementById("weight");

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
 * @description - Randomize order of tiles to be displayed
 * @returns {Array} Object array
 */
function randomTiles() {
    let tileArray = [];
    let dinoArray = [triceratops, tRex, anklyo, brachio, stego, elasmo, pteranodon, pigeon];

    while (dinoArray.length !== 0) {
        let randomIndex = Math.floor(Math.random() * dinoArray.length);
        tileArray.push(dinoArray[randomIndex]);
        dinoArray.splice(randomIndex, 1);
    }
    // Keeps human tile in center of grid
    tileArray.splice(4, 0, human);

    return tileArray;
}

/**
 * @description - Add tiles to DOM
 */
const addTiles = () => randomTiles().forEach(generateTiles);

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
    if (validateForm()) {
        human.species = human.species.value;
        removeForm();
        addTiles();
    }
}
