var textBar = document.getElementById('textBar');
var num1;
var num2;
var inputValue;
function inputNumber() {
  //By przyciski wypisywły numer w polu
  debugger;
  if (textBar.innerHTML === "0" ||  multiNumber === 1){
    if (event.target.className === "operator") { //Jesli zostanie klikniety operator miast liczby
      num1 = 0;
      num2 = 0;
    } else {
      textBar.innerHTML = event.target.innerHTML;
      multiNumber = 0;
    }
  } else {
    textBar.innerHTML += event.target.innerHTML;
  }

  //Konwertuj tekst na liczbe
  if (event.target.className = "number") {
    textBar.innerHTML = parseInt(textBar.innerHTML);
    inputValue = parseInt(textBar.innerHTML);
  }
}

function store (){
  //Zapiuj wprowadzane liczby
  if (num1 === undefined || operator === undefined) {
    num1 = inputValue;
    inputValue = undefined;
  } else {
    if (inputValue === undefined) {
      num2 = 0;
      textBar.innerHTML = num1
    } else {
      num2 = inputValue;
    }
  }
}

//Kalkulacje
var operator;
var formula;
var multiNumber //zmienna pozwalająca wprowadzić kolejne libczy dla danej zmiennej

var calculations = {
  add: function() {
    multiNumber = 1;
    if (operator !== "+") {
      //na poczatku by uniknac wysweitlenia Nan i pozwolic zdobyc num2
      if (num2 === undefined) {
        textBar.innerHTML = num1;
        //na poczatku gdy operator jeszcze nie jest okreslony
      } else if (operator === undefined) {
        formula = num1 + num2;
        textBar.innerHTML = formula;
        num1 = formula;
        //sprawdza, czy nie jest wykonywane inne dzialanie i je dokańcza
      } else if (operator === "-"){
        formula = num1 - num2;
        textBar.innerHTML = num1 - num2;
        num1 = formula;
        num2 = undefined;
        inputValue = undefined;
      } else if (operator === "*"){
        formula = num1 * num2;
        textBar.innerHTML = num1 * num2;
        num1 = formula;
        num2 = undefined;
        inputValue = undefined;
      }
      else if (num1 === "/") {
        if (num2 === 0) {
          textBar.innerHTML = num1;
        } else {
          formula = num1 / num2;
          textBar.innerHTML = num1 / num2;
          num1 = formula;
          num2 = undefined;
          inputValue = undefined;
        }
      }
      operator = "+";
      //Podstawowe obliczenie gdy obie liczby są podane
    } else {
      formula = num1 + num2;
      textBar.innerHTML = formula;
      num1 = formula;
      num2 = undefined;
      inputValue = undefined;
    }
  },
  subtract: function() {
    multiNumber = 1;
    if (operator !== "-") {

      if (num2 === undefined) {
        textBar.innerHTML = num1;

      } else if (operator === undefined) {
        formula = num1 - num2;
        textBar.innerHTML = formula;
        num1 = formula;

      } else if (operator === "+"){
        formula = num1 + num2;
        textBar.innerHTML = num1 + num2;
        num1 = formula;
        num2 = undefined;
        inputValue = undefined;
      } else if (operator === "*"){
        formula = num1 * num2;
        textBar.innerHTML = num1 * num2;
        num1 = formula;
        num2 = undefined;
        inputValue = undefined;
      }
      else if (num1 === "/") {
        if (num2 === 0) {
          textBar.innerHTML = num1;
        } else {
          formula = num1 / num2;
          textBar.innerHTML = num1 / num2;
          num1 = formula;
          num2 = undefined;
          inputValue = undefined;
        }
      }
      operator = "-";

    } else {
      formula = num1 - num2;
      textBar.innerHTML = formula;
      num1 = formula;
      num2 = undefined;
      inputValue = undefined;
    }
  },
  multiply: function() {
    multiNumber = 1;
    if (operator !== "*") {

      if (num2 === undefined) {
        textBar.innerHTML = num1;

      } else if (operator === undefined) {
        formula = num1 * num2;
        textBar.innerHTML = formula;
        num1 = formula;

      } else if (operator === "+"){
        formula = num1 + num2;
        textBar.innerHTML = num1 + num2;
        num1 = formula;
        num2 = undefined;
        inputValue = undefined;
      } else if (operator === "-"){
        formula = num1 - num2;
        textBar.innerHTML = num1 - num2;
        num1 = formula;
        num2 = undefined;
        inputValue = undefined;
      } else if (operator === "/"){
        if (num2 === 0) {
          textBar.innerHTML = num1;
        } else {
          formula = num1 / num2;
          textBar.innerHTML = num1 / num2;
          num1 = formula;
          num2 = undefined;
          inputValue = undefined;
        }
      }
      operator = "*";

    } else {
      formula = num1 * num2;
      textBar.innerHTML = formula;
      num1 = formula;
      num2 = undefined;
      inputValue = undefined;
    }
  },
  divide: function() {
    multiNumber = 1;
    if (operator !== "/") {

      if (num2 === undefined) {
        textBar.innerHTML = num1;

      } else if (operator === undefined) {
        if (num2 === 0) {
          textBar.innerHTML = num1;
        } else {
          formula = num1 / num2;
          textBar.innerHTML = formula;
          num1 = formula;
        }

      } else if (operator === "+"){
        formula = num1 + num2;
        textBar.innerHTML = num1 + num2;
        num1 = formula;
        num2 = undefined;
        inputValue = undefined;
      } else if (operator === "-"){
        formula = num1 - num2;
        textBar.innerHTML = num1 - num2;
        num1 = formula;
        num2 = undefined;
        inputValue = undefined;
      } else if (operator === "*"){
        formula = num1 * num2;
        textBar.innerHTML = num1 * num2;
        num1 = formula;
        num2 = undefined;
        inputValue = undefined;
      }
      operator = "/";

    } else {
      if (num2 === 0) {
        textBar.innerHTML = num1;
      } else {
        formula = num1 / num2;
        textBar.innerHTML = formula;
        num1 = formula;
        num2 = undefined;
        inputValue = undefined;
      }
    }
  }
}
//Restart wyświetlacza
function restart() {
  textBar.innerHTML = "0";
}
