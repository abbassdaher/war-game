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

    this.attackBTN = document.querySelector(`.${this.name}-attack-btn`)
    this.healthBTN = document.querySelector(`.${this.name}-health-btn`)
    this.progress = document.querySelector(`.${this.name}-health`)
    this.controller = document.querySelector(`.${this.name}-controller`)
    this.result = document.querySelector(`.${this.name}-result`)


}

/* The code `chracter.prototype.attack` is defining a method called `attack` on the prototype of the
`chracter` object. This means that all instances of the `chracter` object will have access to this
method. */
chracter.prototype.attack = function (opponent) {
    if (opponent.health == 0 || this.health == 0) {
        opponent.controller.style.visibility = "hidden";
        /* The code `opponent.result.innerHTML  ="Game Over"` sets the innerHTML of the `result`
        element of the opponent character to "Game Over". This is used to display the game over
        message for the opponent character. */
        opponent.result.innerHTML  ="Game Over"
        this.result.innerHTML = "Congratulation"
        this.result.style.color = "green"
        opponent.result.style.color = "red"
        this.controller.style.visibility = "hidden";

    } else {
        opponent.health -= this.strength
        opponent.progress.style.width = `${opponent.health}%`
        console.log(`${opponent.health}%`);
    }

}



/* The `chracter.prototype.makeHealthy` function is a method that increases the health of a character. */
chracter.prototype.makeHealthy = function () {
    if (this.health < 100 && this.health > 0) {
        this.health += this.strength
        if (this.health > 100)
            this.health = 100
        this.progress.style.width = `${this.health}%`
        console.log(`${this.health}%`);
    }

}
CharacterData.prototype.status = function () {
    console.log("Name: " + this.name);
    console.log("Strength: " + this.strength);
    console.log("health: " + this.health);
    console.log("attackBTN: " + this.attackBTN)
}

let nartoo = new chracter('nartoo', 10, 100)
let saskii = new chracter('saskii', 5, 100)

// saskii.status()
console.log(nartoo)
nartoo.attackBTN.addEventListener('click', function () { nartoo.attack(saskii); })
saskii.attackBTN.addEventListener('click', function () { saskii.attack(nartoo); })

saskii.healthBTN.addEventListener('click', function () { saskii.makeHealthy() })
nartoo.healthBTN.addEventListener('click', function () { nartoo.makeHealthy() })
