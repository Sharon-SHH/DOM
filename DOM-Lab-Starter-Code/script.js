//console.group('Selecting Elements');
let nav_bar = document.getElementById('nav-bar');
console.log(nav_bar);
console.log(typeof(nav_bar));

let main = document.querySelector('main');
console.log(main);
console.log(typeof(main));

let aTags = document.querySelectorAll('a');
console.log(aTags);
console.log(typeof(aTags));

let aTag = document.querySelector('a');
console.log(aTag);
// only get the first <a> element

let name1 = 'Lab in Jan 1'
let logo = document.querySelector("div"); // TODO: class? 
console.log(logo.innerHTML);


const messages = document.querySelectorAll("div");
messages[1].classList.add("message--error");

logo.innerHTML = `${name1}`;
console.log(logo.innerHTML);

/* -----.scss file ------
.modify {
    font-size: xx-large;
    &--specific {
        text-decoration: underline;
        color: #7FDEFF;
    }
}
-------.css file ------
.modify {
    font-size: xx-large;
}

.modify--specific {
  text-decoration: underline;
  color: #7FDEFF;
}*/
let muiltiples = document.querySelectorAll("a");
muiltiples[0].classList.add("background");
let classList = ['home', 'about', 'contact', 'grace', 'logout'];
let hrefList = [
  "index.html",
  "about.html",
  "contact.html",
  "grace.html",
  "logout.html",
];
for (let i=0; i < muiltiples.length; i++) {
  muiltiples[i].classList.add("modify"); // set font size
  muiltiples[i].setAttribute("id", classList[i]); // add id to each a element
  muiltiples[i].classList.add("modify--specific"); // add styles to the selector
  // Both of the following two methods work well
  muiltiples[i].setAttribute('href', hrefList[i]); // add hyperlinks
  //muiltiples[i].href = hrefList[i];
}
