const storedArgs = [];
const origArrayToString = Array.prototype.toString;

Array.prototype.toString = function() {
  storedArgs.push(this);
  return origArrayToString.call(this);
};

function squareBracketify(fn, context = this) {
  const handler = {
    get() {
      const args = storedArgs.pop(); // get last stringified array
      storedArgs.length = 0; // clear array
      return fn.call(context, ...args); // call original function
    }
  };

  return new Proxy({}, handler);
}

const squareBracketifySquared = squareBracketify(squareBracketify);
export default squareBracketifySquared;
