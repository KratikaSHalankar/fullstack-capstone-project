const natural = require('natural');

const analyzer = new natural.SentimentAnalyzer(
  'English',
  natural.PorterStemmer,
  'afinn'
);

console.log("Sentiment module loaded");
