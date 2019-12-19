const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/gBooksDB" );

const bookSeed = [
  {
    title: "JavaScript & jQuery: The Missing Manual",
    authors: "David Sawyer McFarland",
    description: "JavaScript lets you supercharge your HTML with animation, interactivity, and visual effects—but many web designers find the language hard to learn. This easy-to-read guide not only covers JavaScript basics, but also shows you how to save time and effort with the jQuery and jQuery UI libraries of prewritten JavaScript code. You’ll build web pages that feel and act like desktop programs—with little or no programming. The important stuff you need to know: Pull back the curtain on JavaScript. Learn how to build a basic program with this language. Get up to speed on jQuery. Quickly assemble JavaScript programs that work well on multiple web browsers. Transform your user interface. Learn jQuery UI, the JavaScript library for interface features like design themes and controls. Make your pages interactive. Create JavaScript events that react to visitor actions. Use animations and effects. Build drop-down navigation menus, pop-ups, automated slideshows, and more. Collect data with web forms. Create easy-to-use forms that ensure more accurate visitor responses. Practice with living examples. Get step-by-step tutorials for web projects you can build yourself.",
    image: "http://books.google.com/books/content?id=ptiYBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=ptiYBAAAQBAJ&source=gbs_api"
  },
  {
    title: "Eloquent JavaScript",
    authors: "Marijn Haverbeke",
    description: "JavaScript is at the heart of almost every modern Web application, whether it's Google Apps, Twitter, or the newest browser-based game. Though it's simple for beginners to pick up and play with, JavaScript is not a toy—it's a flexible and complex language that can be used to build full-scale applications. Eloquent JavaScript dives into this flourishing language and teaches you to write code that's beautiful and effective. By immersing you in example code and encouraging experimentation right from the start, the author quickly gives you the tools you need to build your own programs. As you follow along with examples like an artificial life simulation and a version of the classic game Sokoban, you'll learn to: –Understand the essential elements of programming: syntax, control, and data –Use object-oriented and functional programming techniques to organize and clarify your programs –Script the browser and make basic Web applications –Work with tools like regular expressions and XMLHttpRequest objects And since programming is an art that's best learned by doing, all example code is available online in an interactive sandbox for you to experiment with. With Eloquent JavaScript as your guide, you can tweak, expand, and modify the author's code, or throw it away and build your own creations from scratch. Before you know it, you'll be fluent in the language of the Web.",
    image: "http://books.google.com/books/content?id=UAYvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=UAYvDwAAQBAJ&dq=javascript&hl=&source=gbs_api"
  },
  {
    title: "Speaking JavaScript",
    authors: "Axel Rauschmayer",
    description: "Like it or not, JavaScript is everywhere these days—from browser to server to mobile—and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position. Speaking JavaScript helps you approach the language with four standalone sections. First, a quick-start guide teaches you just enough of the language to help you be productive right away. More experienced JavaScript programmers will find a complete and easy-to-read reference that covers each language feature in depth. Complete contents include: JavaScript quick start: Familiar with object-oriented programming? This part helps you learn JavaScript quickly and properly. JavaScript in depth: Learn details of ECMAScript 5, from syntax, variables, functions, and object-oriented programming to regular expressions and JSON with lots of examples. Pick a topic and jump in. Background: Understand JavaScript’s history and its relationship with other programming languages. Tips, tools, and libraries: Survey existing style guides, best practices, advanced techniques, module systems, package managers, build tools, and learning resources.",
    image: "http://books.google.com/books/content?id=qU3rAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=qU3rAgAAQBAJ&source=gbs_api"
  }
]

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });