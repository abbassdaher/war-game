let saskiiAttackBTN = document.querySelector(".saskii-attack-btn")
let narotoAttackBTN = document.querySelector(".narto-attack-btn")

let saskiiHealthBTN = document.querySelector(".saskii-health-btn")
let narotoHealthBTN = document.querySelector(".narto-health-btn")  

let nartooHealth = document.querySelector(".nartoo-health")
let saskiiHealth = document.querySelector(".saskii-health")

 let saskiHeathyWidth 
 let narotoHealthWidth

saskiiHealth.style.width = "100%"
nartooHealth.style.width = "100%"


/**
 * The function creates a character object with properties for name, strength, and health.
 * @param name - The name of the character. It can be any string value.
 * @param strength - The strength parameter represents the character's physical power or ability to
 * inflict damage on opponents. It can be measured in terms of attack power or damage output.
 * @param health - The "health" parameter represents the amount of health or hit points that a
 * character has. It determines how much damage the character can take before being defeated.
 */
function chracter(name,strength,health){
    this.name = name
    this.strength = strength
    this.health = health
}

/* The code `chracter.prototype.attack` is defining a method called `attack` on the prototype of the
`chracter` object. This means that all instances of the `chracter` object will have access to this
method. */
/* The code `chracter.prototype.attack` is defining a method called `attack` on the prototype of the
`chracter` object. This means that all instances of the `chracter` object will have access to this
method. */
chracter.prototype.attack = function(opponent){
    console.log("this",this);
    console.log("opponent",opponent)
    if(this.name == 'naroto' ){
        opponent.health -=this.strength
        saskiiHealth.style.width = `${opponent.health}%`
        console.log(`${opponent.health}%`);
    }else{
        opponent.health -=this.strength
        console.log(`${opponent.health}%`);
        nartooHealth.style.width = `${opponent.health}%`

    }
    
}

let naroto = new chracter('naroto',10,100)
let sasaki = new chracter('sasaki',5,100)


narotoAttackBTN.addEventListener('click',function(){naroto.attack(sasaki)})
saskiiAttackBTN.addEventListener('click',function(){sasaki.attack(naroto)})

console.log(naroto)
console.log(sasaki)