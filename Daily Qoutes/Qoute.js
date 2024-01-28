const Quote = document.querySelector('.content');
const author = document.querySelector('.author');
const NQuotes = document.querySelector('.Nqoute');
const fetch_url = 'https://api.quotable.io/quotes/random';

// Function to fetch and display quotes
async function getQuotes() {
  try {
    // Fetch a new quote on initialization
    await fetchQuote();

    // Add click event listener to the 'New Quotes' button
    NQuotes.addEventListener('click', fetchQuote);
  } catch (error) {
    console.error('Error fetching quotes:', error);
  }
}

// Function to fetch a single quote and update the UI
async function fetchQuote() {
  try {
    const response = await fetch(fetch_url);
    const data = await response.json();

    // Display the fetched quote
    Quote.innerHTML = `“${data[0].content}”`;
    const authorName = data[0].author;
    author.innerHTML = ` <span class="qouteline"></span>${authorName}`;
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}

// Call getQuotes initially
getQuotes();

function tweeter() {
  window.open('https://twitter.com/intent/tweet?text='+ Quote.innerHTML, 'Tweet Window', "width=600,height=300")
}
