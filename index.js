// Write your code here!
const removeMain = document.getElementById('main')
removeMain.remove()
// create DOM Element
const newHeader = document.createElement('h1')
// append element to document.body
document.body.appendChild(newHeader)
// set my name
let name = 'Amy'
// add id to newheader varaible
newHeader.id = 'victory'
// set innerHTML string to intake my name
newHeader.innerHTML = `${name} is the champion`



// let content = document.createElement('h1#victory')
// newHeader.appendChild(newHeader)
// get the element
// let element = document.querySelector('htmltag#idofelement');
// change the element
// element.innerHTML = 'Hello, DOM!'

// slightly more complicated example:
/* let header = document.getElementById('div#header);
header.inerHTML = "<htmltag>SOMETEXT</htmltag><htmltag>SOMETEXT a lot more text just more content in a htmltag</htmltag><htmltag>then another tag inside of html header that needs to be added</htmltag>";
*/
// sets a variable named header to the element div with an id of header and adds some html tags and content. 
// Becareful using innerHTML it can cause issues within a site

// Element.style.backgroundColor = "#hexcode, or rgb or whatever"
// Changes the elements style

// adjust the display
// Element.style.textAlign = 'center';
// ul.style.textAlign = 'left';

// Change element by classname
// Element.className = 'dog';
// Element.className = 'pet-listing dog';

// add classes programmatically
// .add() and .remove() methods
// using CSS rules .this-is-fine and .the-room-is-on-fire
// Element.classList.remove('this-is-fine');
// Element.classList.add('the-room-is-on-fire');


// HTML defines structure
// JavaScruipt defines functionality
// CSS defines visualiztion and style

// remove element from page
// element.removeChild(element.querySelector('element:nth-child(2)'))
// remove whole element
// element.remove()


