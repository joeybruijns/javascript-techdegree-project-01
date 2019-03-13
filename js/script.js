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

// A list of different color values
let bgColors = ["#6eb362", "#b2088a", "#e483dc", "#4C9BB2"];

// A function for picking a random quote from the array
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}

// A function that changes the background color of the page and the button
function changeBackground() {
    let randomColor = Math.floor(Math.random() * bgColors.length);
    document.body.style.backgroundColor = bgColors[randomColor];

    let button = document.getElementById('loadQuote');
    button.style.backgroundColor = bgColors[randomColor];

    button.onmouseover = hoverOver;
    button.onmouseleave = buttonColor;

    function buttonColor() {
        let button = document.getElementById('loadQuote');
        button.style.backgroundColor = bgColors[randomColor];
    }

    function hoverOver() {
        let elem = document.getElementById('loadQuote');
        elem.style.backgroundColor = "rgba(255,255,255,.25)";
    }
}

// A function for printing the random quote to the screen
function printQuote() {
    let randomQuote = getRandomQuote();
    let htmlString = "<p class=\"quote\">" + randomQuote.quote + "</p>";
    htmlString += "<p class=\"source\">" + randomQuote.source;

    if (randomQuote.citation) {
        htmlString += "<span class=\"citation\">" + randomQuote.citation + "</span>";
    }

    if (randomQuote.year) {
        htmlString += "<span class=\"year\">" + randomQuote.year + "</span>";
    }
    htmlString += "<span class=\"tag\">" + randomQuote.tag + "</span></p>";

    document.getElementById('quote-box').innerHTML = htmlString;
    changeBackground()
}

// interval function for changing quotes automatically
function interval() {
    setInterval(printQuote, 25000);
}

interval();

// When the button is clicked, a random quote is displayed and the background color is changed
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
