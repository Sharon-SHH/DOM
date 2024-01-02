//target the text of the element in our index.html with id="title"
const title = document.getElementById("title").innerText;
console.log(title);

//change the text of title
document.getElementById("title").innerText = "What Up Universe!";

//target and log the first instance of 'p' elements
const paragraph = document.querySelector("p");
console.log(paragraph);

//target all p tags - will be saved in a NodeList
const messages = document.querySelectorAll("p");
//console.log(messages);
//console.log(messages.length);

//use the .forEach() method to iterate over each item inside of the previously create 'messages' NodeList
messages.forEach((message) => {
  console.log("forEach(): " + message.innerText);
});
///

//target the element with class="container", which will serve as our landing spot for elements we add later
const container = document.querySelector(".container");

//created a new element
const newElement = document.createElement("p");
//gave the new element some text
newElement.innerText = "This is a dynamically-created, new paragraph";
//add this new element to our container (lines 23 & 24 above)
container.prepend(newElement);

//add and remove classes

//add class name to our container
container.classList.add("container__highlight");
//add class name to the item at index 1 in our messages NodeList
messages[1].classList.add("message--error");

//target item in messages NodeList at index 3
const lastMessage = messages[3];
//remove the class name "message" from that item
lastMessage.classList.remove("message");

//target element with class="titles"
const titles = document.querySelector(".titles");

const newH2 = document.createElement("h2");
newH2.innerText = "Welcome to the DOM Demo!";
titles.appendChild(newH2);

newH2.setAttribute("id", "coolNewID");
//newH2.style.fontSize = "5rem";
newH2.style.color = "red";

//const mainTitle = document.getElementById("title");
//titles.removeChild(mainTitle);

////////////////////////////////

//differences between innerText, innerHTML, textContent
const element = document.getElementById("myElement");

//innerText example
const innerTextContent = element.innerText;
//console.log(innerTextContent);

//innerHTML example
const innerHTMLContent = element.innerHTML;
//console.log(innerHTMLContent);

//textContent example
const textContent = element.textContent;
console.log(textContent);

////////////////////////////////

//demonstrated how innerHTML can be problematic

function changeText() {
  const name = document.getElementById("nameInput").value;

  //change text using innerText
  const innerTextOutput = document.getElementById("innerTextOutput");
  innerTextOutput.innerText = `Hello, ${name}`;

  //change text using innerHTML
  const innerHTMLOutput = document.getElementById("innerHTMLOutput");
  innerHTMLOutput.innerHTML = `Hello, <em>${name}</em>`;

  //change text using textContent
  const textContentOutput = document.getElementById("textContentOutput");
  textContentOutput.textContent = `Hello, ${name}`;
}
