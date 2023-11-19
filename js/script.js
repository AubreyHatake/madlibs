// Variable arrays 
var verbs = ["run", "jump", "duck", "walk", "skip", "dance"];
var verbing = ["running", "jumping", "walking", "skipping", "dancing"];
var nouns = [" Beyonce ", " New York", " Microwave ", " Florida ", " backpack ", " fridge ", "  chair  "];
var adjectives = ["pretty", "nice", "tall", "strong","weak", "ugly", "fat", "short"];


function submitForm() {
    
    var adjectives = document.getElementById("adjective").value;
    console.log(adjectives);
    document.getElementById("userAdj").innerHTML = adjectives;
    var adjTwo = document.getElementById("adjectiveTwo").value;
    console.log(adjTwo);
    document.getElementById("useradjTwo").innerHTML = adjTwo; 
    var noun = document.getElementById("noun").value;
    console.log(noun);
    document.getElementById("nounOne").innerHTML = noun;
    var nouns = document.getElementById("nouns").value;
    console.log(nouns);
    document.getElementById("nounTwo").innerHTML = nouns;
    var verb = document.getElementById("verb").value;
    console.log(verb);
    document.getElementById("verbOne").innerHTML = verb;
    var verbs = document.getElementById("verbs").value;
    console.log(verbs);
    document.getElementById("verbTwo").innerHTML = verbs;
    
}

submitForm();

function getRandy() {

var randy = adjectives[Math.floor(Math.random() * adjectives.length)];
document.getElementById("userAdj").innerHTML = randy;
var randy = adjectives[Math.floor(Math.random() * adjectives.length)];
document.getElementById("useradjTwo").innerHTML = randy;
var randy = nouns[Math.floor(Math.random() * nouns.length)];
document.getElementById("nounOne").innerHTML = randy;
var randy = nouns[Math.floor(Math.random() * nouns.length)];
document.getElementById("nounTwo").innerHTML = randy;
var randy = verbing[Math.floor(Math.random() * verbing.length)];
document.getElementById("verbOne").innerHTML = randy;
var randy = verbs[Math.floor(Math.random() * verbs.length)];
document.getElementById("verbTwo").innerHTML = randy;


}

document.getElementById("randomBtn").addEventListener("click", getRandy);