function processInput(text) {
  let result;
  if (text.length > 5) {
    result = text.toUpperCase();
  } else {
    result = text.toLowerCase();
  }
  console.log(result);
}

processInput("hey everyone");
