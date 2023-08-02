/**
 * The function creates a character object with properties for name, strength, and health.
 * @param name - The name of the character. It can be any string value.
 * @param strength - The strength parameter represents the character's physical power or ability to
 * inflict damage on opponents. It can be measured in terms of attack power or damage output.
 * @param health - The "health" parameter represents the amount of health or hit points that a
 * character has. It determines how much damage the character can take before being defeated.
 */
function chracter(name, strength, health) {
    this.name = name
    this.strength = strength
    this.health = health
    this.elements = new uiElements(this.name)
    


}

function uiElements(name){
    this.attackBTN = document.querySelector(`.${name}-attack-btn`)
    this.healthBTN = document.querySelector(`.${name}-health-btn`)
    this.progress = document.querySelector(`.${name}-health`)
    this.controller = document.querySelector(`.${name}-controller`)
    this.result = document.querySelector(`.${name}-result`)
}

/* The code `chracter.prototype.attack` is defining a method called `attack` on the prototype of the
`chracter` object. This means that all instances of the `chracter` object will have access to this
method. */
chracter.prototype.attack = function (opponent) {
    if (opponent.health == 0 || this.health == 0) {

        opponent.elements.controller.style.visibility = "hidden";
        this.elements.controller.style.visibility = "hidden";

        /*This is used to display the game over
        message for the opponent character. */
        opponent.elements.result.innerHTML = "Game Over"
        this.elements.result.innerHTML = "Congratulation"
        // style for results
        this.elements.result.style.color = "green"
        opponent.elements.result.style.color = "red"
    } else {
        opponent.health -= this.strength
        opponent.elements.progress.style.width = `${opponent.health}%`
        console.log(`${opponent.health}%`);
    }

}



/* The `chracter.prototype.makeHealthy` function is a method that increases the health of a character. */
chracter.prototype.makeHealthy = function () {
    if (this.health < 100 && this.health > 0) {
        this.health += this.strength
        if (this.health > 100)
            this.health = 100
        this.elements.progress.style.width = `${this.health}%`
        console.log(`${this.health}%`);
    }

}
CharacterData.prototype.status = function () {
    console.log("Name: " + this.name);
    console.log("Strength: " + this.strength);
    console.log("health: " + this.health);
    console.log("attackBTN: " + this.elements.attackBTN)
}

let nartoo = new chracter('nartoo', 10, 100)
let saskii = new chracter('saskii', 5, 100)

// saskii.status()
console.log(nartoo)
nartoo.elements.attackBTN.addEventListener('click', function () { nartoo.attack(saskii); })
saskii.elements.attackBTN.addEventListener('click', function () { saskii.attack(nartoo); })

saskii.elements.healthBTN.addEventListener('click', function () { saskii.makeHealthy() })
nartoo.elements.healthBTN.addEventListener('click', function () { nartoo.makeHealthy() })
