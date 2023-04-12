const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let expression = '';

// Loop through each button and add a click event listener
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    handleInput(value);
  });
});

// Add a keydown event listener to the document
document.addEventListener('keydown', event => {
  const key = event.key;
  // If the key is a number or an operator, add it to the expression
  if (/[\d\+\-\*\/\.]/.test(key)) {
    handleInput(key);
  // If the key is 'Enter', evaluate the expression
  } else if (key === 'Enter') {
    handleInput('=');
  // If the key is 'Backspace', remove the last character from the expression
  } else if (key === 'Backspace') {
    handleInput('backspace');
  // If the key is 'Delete', clear the calculator
  } else if (key === 'Delete') {
    handleInput('delete');
  }
});

function handleInput(value) {
  if (value === 'C') {
    // Clear the calculator
    expression = '';
    result.value = '';
  } else if (value === 'backspace') {
    // Remove the last character from the expression
    expression = expression.slice(0, -1);
    result.value = expression;
  } else if (value === 'delete') {
    // Delete the entire expression
    expression = '';
    result.value = '';
  } else if (value === '=') {
    // Evaluate the expression
    try {
      expression = eval(expression);
      result.value = expression;
    } catch (err) {
      result.value = 'Error';
    }
  } else if (value === 'sqrt') {
    // Calculate the square root of the expression
    try {
      expression = Math.sqrt(eval(expression));
      result.value = expression;
    } catch (err) {
      result.value = 'Error';
    }
  } else {
    // Add the clicked button value to the expression
    expression += value;
    result.value = expression;
  }
}
