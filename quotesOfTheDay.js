let quoteBox = document.getElementById("quoteBox");
// const quoteArray = ["heyyy buddy", "hiiiiii sunny", "ohhhh no", "i am dying"];
const quoteArray = [
  "“Just one small positive thought in the morning can change your whole day.” — Dalai Lama",
  "“Opportunities don't happen, you create them.” — Chris Grosser",
  "“Love your family, work super hard, live your passion.” — Gary Vaynerchuk",
  "“It is never too late to be what you might have been.” — George Eliot",
  "“Don't let someone else's opinion of you become your reality” — Les Brown",
  "“If you're not positive energy, you're negative energy.” Mark Cuban",
  "“I am not a product of my circumstances. I am a product of my decisions.” — Stephen R. Covey",
  "“Do the best you can. No one can do more than that.” ―John Wooden",
  "“If you can dream it, you can do it.” ―Walt Disney",
  "“Do what you can, with what you have, where you are.” ―Theodore Roosevelt",
  "“Life can be much broader once you discover one simple fact: Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it… Once you learn that, you'll never be the same again.” —Steve Jobs",
  "“Life is like riding a bicycle. To keep your balance you must keep moving.” —Albert Einstein",
  "“What you do speaks so loudly that I cannot hear what you say.” —Ralph Waldo Emerson",
  "“I have never let my schooling interfere with my education.” —Mark Twain",
  "“If you can't yet do great things, do small things in a great way.” ―Napoleon Hill",
  "“If you really want to do something, you'll find a way. If you don't, you'll find an excuse.” ―Jim Rohn",
  "“Be sure you put your feet in the right place, then stand firm.” ―Abraham Lincoln",
  "“Live out of your imagination, not your history.” —Stephen Covey",
  "“Do not wait for the perfect time and place to enter, for you are already onstage.” —Unknown",
  "“The greater the difficulty, the more the glory in surmounting it.” ―Epicurus",
  "Courage doesn't always roar. Sometimes courage is a quiet voice at the end of the day saying, “I will try again tomorrow”. —Mary Anne Radmacher",
  "“If the decisions you make about where you invest your blood, sweat, and tears are not consistent with the person you aspire to be, you’ll never become that person.” ―Clayton M. Christensen",
];
const randomQuotes = Math.floor(Math.random() * quoteArray.length - 1);

quoteBox.innerText = quoteArray[randomQuotes];
