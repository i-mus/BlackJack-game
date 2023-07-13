let player = {
    name: "Player1",
    chips: 120
}
let sum = 0
let cardArray = []
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $"+player.chips

function startGame(){
    isAlive = true
    let firstNum = getRandomCard()
    let secondNum = getRandomCard()
    sum = firstNum + secondNum
    cardArray=[firstNum, secondNum]
    renderGame()
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1){
        return 11
    }else if(randomNumber > 10){
        return 10
    }else{
        return randomNumber
    }
    
}

function renderGame(){
    sumEl.textContent = "Sum: "+sum
    cardEl.textContent = "Cards:"
    for(let i=0; i<cardArray.length; i+=1){
        cardEl.textContent += cardArray[i] + " "
    } 
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        hasBlackJack = true
        message = "You've got a Black jack!!!"
    }else{
        isAlive = false
        message = "You're out of the game"
    }
    messageEl.textContent = message

}

function newcard(){
    if (isAlive == true && hasBlackJack == false){
        let card = getRandomCard()
        cardArray.push(card)
        sum = sum + card
        renderGame()

    }
    
}



// let myFIrstObj = {
//     title:'taj mahal',
//     area: 'large',
//     free : false,
//     cash: 100
// }

// console.log(myFIrstObj.cash)