// Define an array of quotes
const quotes = [
  { text: "The best way to predict the future is to create it", author: "Abraham Lincoln" },
  { text: "Sucess is not final, failure is not fatal: it is the courage to continue that counts", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there", author: "Theodore Roosevelt" },
  { text: "Chaque expert a d'abord ignoré tout de ce qu'il allait un jour maîtriser", author: "John P.Strelecky"},
  { text: "Un pessimiste voit la difficulé dans chaque opportunité: un optimiste voit l'opportunité dans chaque difficulté", author: "Winston Churchill"},
  { text: "Il est dur d'échouer; mais il est pire de n'avoir jamais tenté de réussir", author: "Franklin Delano Roosevelt"},
  { text: "Vous commencez à vivre pleinement lorsque vous prenez conscience que chaque moment consacré aux idées noires est une pure perte de temps", author: ""},
  { text: "Le succès est la somme de petits efforts répétés jour après jour", author: ""},
  { text: "Vivre c'est la chose la plus rare du monde. La plupart des gens ne font qu'exister", author: "Oscar Wilde"},
  { text: "Face à une question ardue, nous penchons souvent pour une réponse à une question facile, généralement sans prendre conscience de la substitution", author: "Daniel Kahneman"},
  { text: "La distance entre vos rêves et la réalité est appelé action", author: ""},
  { text: "Le pire des défauts est de les ignorer", author: ""},
  { text: "Le plus grand danger n'est pas que notre but soit trop élevé et que nous le manquions, mais qu'il soit trop bas et que nous l'atteignions", author: "Michel-Ange"},
  { text: "", author: ""},
  { text: "", author: ""},
];

// Function to generate random quote
function generateQuote() {
 const randomIndex = Math.floor(Math.random() * quotes.length);
 const quote = quotes[randomIndex];
 document.getElementById("quote").innerHTML = quote.text + " - " + quote.author;
}

// Event listener for button click
document.getElementById("new-quote").addEventListener("click",generateQuote);

// Generate first quote on page load
generateQuote();