const quotes = [
    {
        quotes : "Nobody can make you feel inferior without your permission.",
        author : "Eleanor Roosevelt",
    },
    {
        quotes : "You can never plan the future by the past.",
        author : "Edmund Burke",
    },
    {
        quotes : "He who has a why to live can bear almost any how.",
        author : "Friedrich Nietzsche",
    },
    {
        quotes : "Take into account that great love and great achievements involve great risk.",
        author : "Dalai Lama",
    },
    {
        quotes : "Lost time is never found again.",
        author : "Benjamin Franklin",
    },
    {
        quotes : "He that respects himself safe from other.",
        author : "Henry Wadsworth Longfellow",
    },
    {
        quotes : "Common sense is genius dressed in its working clothes.",
        author : "Ralph Waldo Emerson",
    },
    {
        quotes : "In three words I can sum up everythind I've learned about life : it goes on.",
        author : "Robert Frost",
    },
    {
        quotes : "It is the province of knowledge to speak, and it is the privilege of wisdom to listen.",
        author : "Oliver Wendell Holmes Sr.",
    },
    {
        quotes : "Don't take life too seriously. Yoy'll never get out of it alive.",
        author : "Elbert Hubbard",
    }
    
]

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quotes;
author.innerText = todaysQuotes.author;

// Math.PI : 3.14149..
// Math.random : 0-9까지 무작위 수 출력
// Math.round(1.1) : 소수점 자리 반올림
// Math.ceil() : 소수점 자리 모두 올림
// Math.floor() : 소수점 자리 모두 내림