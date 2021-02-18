//https://javascript.info/strict-mode or
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
//This program is written very naively - on ourpose
//This will be future 

//const prompt = require('prompt-sync')({sigint: true});

//Apple Banana Cherry Diamond

//D R Y

const nrReels = 3

const g="Grapes"
const w="Watermelon"
const t="Tangerine"
const l="Lemon"
const b="Banana"
const p="Pineapple"
const m="Mango"
const r="Red Apple"
const c="Cherries"
const s="Strawberry"


const reel=[g,w,t,l,b,p,m,r,c,s]

let money=100

//let started=process.hrtime() //returs a [seconds][nanoseconds] tuple

let costPerSpin = 1

var holdSpin = []

//while (money>costPerSpin){      // the main loop
function spinReels(){

    console.log('You have £' + money )
    prompt('Press enter to spin the wheels') 

    money -= costPerSpin        // pay 1 pound per spin

    var p = []                  // keeps stops for each reel

    reelStop(reel, nrReels)     // stop for each reel
    
    displayStops(nrReels, reel, p)  // display stops for each reel


    if (checkReelsMatch(reel,p)){

        console.log ('You win :o)')
        if (reel[p[0]]=='Apple'){
            money = money + 10
            console.log ('£10')
        }
        else if (reel[p[0]]=='Banana'){
            money = money + 20
            console.log ('£20')
        }
        else if (reel[p[0]]=='Cherry'){
            money = money + 30
            console.log ('£30')
        }
        else if (reel[p[0]]=='Rasberry'){
            money = money + 40
            console.log ('£40')
        }
        else if (reel[p[0]]=='Watermelon'){
            money = money + 50
            console.log ('£50')
        }
        else {
            money = money + 100
            console.log ('£100')
        }
    }

    else {
        console.log ('YOU LOSE!')
    }

    if (Math.floor(Math.random() * 10) == 5) {
        if (holdSpin.length == nrReels) {
            for(i=0; i<nrReels; i++){
                holdSpin[i] = p[i]
        }
    }

}
}

//console.log ("You are out of money - gambling ia a fools game")

//let took=process.hrtime(strated)
//console.log (took[0] +" second and " + took[1] /1e6 + " milliseconds")


function checkReelsMatch(reel,p){
   let temp = true
   for (i=1; i<p.length; i++) {
        if ((reel[p[i-1]] != reel[p[i]])){
        temp = false
        }
    }
    return temp
}

function displayStops(nrReels, reel, p) {
    var myVar = ""
    for(i=0; i<nrReels; i++){
        myVar = myVar + reel[p[i]] + " ";
    }
    console.log(myVar)
}

function reelStop(reel, nrReels) {
    for (i=0; i<nrReels; i++){
        p.push(Math.floor(Math.random() * reel.length))

    }
}
// var reel = document.getElementsByClassName("reel")

function testSpin(){
    let a = document.getElementById("reel")
    a.scroll({
    top: 2000,
    left: 0,
    behavior: 'smooth'
    });
}
