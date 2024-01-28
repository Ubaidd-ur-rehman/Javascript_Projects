function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0,-1);
  }
  
  function calculateResult() {
    const displayValue = document.getElementById('display').value;
    try {
      const result = eval(displayValue);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  