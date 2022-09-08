const gamingQuotes = ["What is better? To be born good or to overcome your evil nature through great effort? --Paarthurnax, The Elder Scrolls 5: Skyrim"];

//Gets Random Quote from Array
function randGameQuote() {
    let quote = gamingQuotes[Math.floor(Math.random() * gamingQuotes.length)]
    document.getElementById('quote').textContent = quote;
}
//Applies function to Gaming Quote Button
document.getElementById('gaming-quote').addEventListener('click', ()=>{
    randGameQuote();
})