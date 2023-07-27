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


function chracter(name,strength,health){
    this.name = name
    this.strength = strength
    this.health = health
}

chracter.prototype.attack = function(opponent){
    console.log("this",this);
    console.log("opponent",opponent)
    if(this.name == 'naroto' ){
        opponent.health -=10
        saskiiHealth.style.width = `${opponent.health}%`
        console.log(`${opponent.health}%`);
    }else{
        opponent.health -=5
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