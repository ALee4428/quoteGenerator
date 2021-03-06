var quotes = [
  '"Those who believe absurdities will commit atrocities."  -Voltaire',
  '"Don\'t cry because it\'s over, smile because it happened."  -Dr. Seuss',
  '"Be yourself. Everyone else is already taken."  -Oscar Wilde',
  '"You only live once, but if you do it right, once is enough."  -Mae West',
  '"Two things are infinite: the universe and human stupidity, and I\'m not sure about the universe."  -Albert Einstein',
  '"So many books, so little time."  -Frank Zappa',
  '"Be the change you wish to see in the world."  -Mahatma Gandhi',
  '"In three words I can sum up everything I\'ve learned about life: it goes on."  -Robert Frost',
  '"If you tell the truth, you don\'t have to remember anything."  -Mark Twain',
  '"Always forgive your enemies. Nothing annoys them more."  -Oscar Wilde',
  '"Live as if you were to die tomorrow. Learn as if you were to live forever."  -Mahatma Gandhi',
  '"Happiness in intelligent people is the rarest thing I know."  -Ernest Hemingway',
  '"There is no friend as loyal as a book."  -Ernest Hemingway',
  '"Courage is grace under pressure."  -Ernest Hemingway',
  '"An intelligent man is sometimes forced to be drunk to spend time with his fools."  -Ernest Hemingway',
  '"The way to see by faith is to shut the eye of reason."  -Benjamin Franklin',
  '"Whoever is happy will make others happy too."  -Anne Frank',
  '"I\'ve not failed. I\'ve just found 10,000 ways that don\'t work."  -Thomas Eddison'
]

function newQuote(){
  var currentQuote = (Math.floor(Math.random() * quotes.length));
  document.getElementById("quoteBox").innerHTML = quotes[currentQuote];
}
function tweetQuote(){
 window.open("https://twitter.com/intent/tweet?text=" + quoteBox.innerHTML)
}
document.addEventListener('DOMContentLoaded', function() {
    newQuote();
}, false);
