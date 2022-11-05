const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter")
newQuoteBtn.addEventListener("click", newQuote);



let apiQuotes = [];
async function getQuotes() {
  const apiUrl =
    "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.error(error);
  }
}

function newQuote() {
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if Author field is blank and replace it with "Unknown"
  if (!quote.author){
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
 quoteText.textContent = quote.text;
}

function tweetQuote() {
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl,'_blank');
}

twitterBtn.addEventListener('click', tweetQuote);


// Tweet Quote


 //Event Listeners
 

getQuotes();