const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}
function deleteLastCharacter() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
function calculateSquareRoot() {
  const number = parseFloat(displayValue);
  if (!isNaN(number) && number >= 0) {
      displayValue = Math.sqrt(number);
      document.getElementById("display").value = displayValue;
  } else {
      document.getElementById("display").value = "Error";
  }
}
