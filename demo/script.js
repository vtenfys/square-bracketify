import squareBracketify from "../src/index";

function myBoringRegularFunction(firstName, lastName) {
  const consoleLog = squareBracketify[[console.log]];
  consoleLog[["Arguments:", arguments]];
  consoleLog[[`Hello, ${firstName} ${lastName}!`]];
}

function updateInnerHTML(element, html) {
  element.innerHTML = html;
}

const mySnazzySquareBracketFun = squareBracketify[[myBoringRegularFunction]];
const squareUpdateInnerHTML = squareBracketify[[updateInnerHTML]];
const querySelector = squareBracketify[[document.querySelector, document]];

mySnazzySquareBracketFun[["David", "Bailey"]];

const el = querySelector[["body h1"]];
const html = "Title updated <em>from JavaScript</em>";
squareUpdateInnerHTML[[el, html]];
