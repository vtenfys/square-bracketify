import squareBracketify from "../src/index";

function myBoringRegularFunction(firstName, lastName, times = 1) {
  const consoleLog = squareBracketify[[console.log]];
  consoleLog[["Arguments:", arguments]];

  for (let i = 0; i < times; i += 1) {
    consoleLog[[i + 1, `Hello, ${firstName} ${lastName}!`]];
  }
}

function updateInnerHTML(element, html) {
  element.innerHTML = html;
}

const mySnazzySquareBracketFun = squareBracketify[[myBoringRegularFunction]];
const squareUpdateInnerHTML = squareBracketify[[updateInnerHTML]];
const querySelector = squareBracketify[[document.querySelector, document]];

mySnazzySquareBracketFun[["David", "Bailey", 2]];

const el = querySelector[["body h1"]];
const html = "Title updated <em>from JavaScript</em>";
squareUpdateInnerHTML[[el, html]];
