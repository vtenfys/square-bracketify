import squareBracketify from "../src/index";

function myBoringRegularFunction(firstName, lastName) {
  console.log("Arguments:", arguments);
  console.log(`Hello, ${firstName} ${lastName}!`);
}

function updateInnerHTML(element, html) {
  element.innerHTML = html;
}

const mySnazzySquareBracketFunction = squareBracketify(myBoringRegularFunction);
const squareUpdateInnerHTML = squareBracketify(updateInnerHTML);
const querySelector = squareBracketify(document.querySelector, document);

mySnazzySquareBracketFunction[["David", "Bailey"]];

const el = querySelector[["body h1"]];
const html = "Title updated <em>from JavaScript</em>";
squareUpdateInnerHTML[[el, html]];
