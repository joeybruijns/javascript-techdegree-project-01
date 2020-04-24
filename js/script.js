/******************************************
 Joey Bruijns
 Treehouse FSJS Techdegree:
 project 1 - A Random Quote Generator
 ******************************************/

// An array of objects containing different quotes
let quotes = [
    {
        quote: "Hakuna Matata... it means no worries!",
        source: "Timon and Pumbaa",
        citation: "The Lion King",
        year: "1994",
        tag: "[MOVIES]"
    },
    {
        quote: "It always seems impossible until it's done.",
        source: "Nelson Mandela",
        tag: "[INSPIRATION]"
    },
    {
        quote: "Set your goals high, and don't stop till you get there.",
        source: "Bo Jackson",
        tag: "[SPORT]"
    },
    {
        quote: "If you can dream it, you can do it.",
        source: "Walt Disney",
        tag: "[INSPIRATION]"
    },
    {
        quote: "I'll be back...",
        source: "Arnold Schwarzenegger",
        citation: "The Terminator",
        year: "1984",
        tag: "[MOVIES]"
    }
];

// A function for picking a random quote from the array
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}

// A function that changes the background color of the page and the button
function changeBackground() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let color = `rgb(${x} , ${y} , ${z})`;

    document.body.style.backgroundColor = color;
    document.getElementById('loadQuote').style.backgroundColor = color;;
}

// A function for printing the random quote to the screen
function printQuote() {
    let randomQuote = getRandomQuote();
    let htmlString = `<p class="quote">${randomQuote.quote}</p>`;
    htmlString += `<p class="source">${randomQuote.source}`;

    if (randomQuote.citation) {
        htmlString += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if (randomQuote.year) {
        htmlString += `<span class="year">${randomQuote.year}</span>`;
    }
    if (randomQuote.tag) {
        htmlString += `<span class="tag">${randomQuote.tag}</span>`;
    }

    htmlString += `</p>`;

    document.getElementById('quote-box').innerHTML = htmlString;
    changeBackground();
}

// call the setInterval function for changing quotes automatically
const interval = setInterval(printQuote, 25000);

// When the button is clicked, a random quote is displayed and the background color is changed
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
