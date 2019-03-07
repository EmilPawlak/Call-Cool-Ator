var textBar = document.getElementById('textBar');
var inputValue;
var num1 = 0;
var num2 = 0;
debugger;
function input() {
  //By przyciski wypisywły numer w polu
  if (textBar.innerHTML === "0" ||  multiNumber === 1){
      textBar.innerHTML = event.target.innerHTML;
      multiNumber = 0;
  } else {
    textBar.innerHTML += event.target.innerHTML;
  }

  //Konwertuj tekst na liczbe
  inputValue = parseInt(textBar.innerHTML);

  //Zapiuj wprowadzane liczby
  if (formula !== undefined) {
    num2 = inputValue;
  } else {
    num1 = inputValue;
  }
}
//Kalkulacje
var operator;
var formula;
var multiNumber; //zmienna pozwalająca wprowadzić kolejne libczy dla danej zmiennej

var calculations = {
  add: function() {
    multiNumber = 1;
    if (operator !== "+") {
      //na poczatku gdy operator jeszcze nie jest okreslony
      if (operator === undefined) {
      formula = num1 + num2;
      textBar.innerHTML = formula;
      num1 = formula;
      num2 = 0;
      //na poczatku by uniknac wysweitlenia Nan i pozwolic zdobyc num2
    } else if (num2 === undefined) {
        textBar.innerHTML = num1;
        //sprawdza, czy nie jest wykonywane inne dzialanie i je dokańcza
      } else if (operator === "-"){
        formula = num1 - num2;
        textBar.innerHTML = num1 - num2;
        num1 = formula;
        num2 = 0;

      } else if (operator === "*"){
        formula = num1 * num2;
        textBar.innerHTML = num1 * num2;
        num1 = formula;
        num2 = 0;
      }
      else if (operator === "/") {
        if (num2 === 0) {
          textBar.innerHTML = num1;
        } else {
          formula = num1 / num2;
          textBar.innerHTML = num1 / num2;
          num1 = formula;
          num2 = 0;
        }
      }
      operator = "+";
      //Podstawowe obliczenie gdy obie liczby są podane
    } else {
      formula = num1 + num2;
      textBar.innerHTML = formula;
      num1 = formula;
      num2 = 0;
    }
  },
  subtract: function() {
    multiNumber = 1;
    if (operator !== "-") {

      if (operator === undefined) {
        if (num2 === undefined) {
          num2 = 0;
        }
        formula = num1 - num2;
        textBar.innerHTML = formula;
        num1 = formula;
        num2 = 0;

      } else if (num2 === undefined) {
        textBar.innerHTML = num1;

      } else if (operator === "+"){
        formula = num1 + num2;
        textBar.innerHTML = num1 + num2;
        num1 = formula;
        num2 = 0;

      } else if (operator === "*"){
        formula = num1 * num2;
        textBar.innerHTML = num1 * num2;
        num1 = formula;
        num2 = 0;
      }
      else if (operator === "/") {
        if (num2 === 0) {
          textBar.innerHTML = num1;
        } else {
          formula = num1 / num2;
          textBar.innerHTML = num1 / num2;
          num1 = formula;
          num2 = 0;
        }
      }
      operator = "-";

    } else {
      formula = num1 - num2;
      textBar.innerHTML = formula;
      num1 = formula;
      num2 = 0;
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
        num2 = 0;

      } else if (operator === "+"){
        formula = num1 + num2;
        textBar.innerHTML = num1 + num2;
        num1 = formula;
        num2 = 0;

      } else if (operator === "-"){
        formula = num1 - num2;
        textBar.innerHTML = num1 - num2;
        num1 = formula;
        num2 = 0;

      } else if (operator === "/"){
        if (num2 === 0) {
          textBar.innerHTML = num1;
        } else {
          formula = num1 / num2;
          textBar.innerHTML = num1 / num2;
          num1 = formula;
          num2 = 0;
        }
      }
      operator = "*";

    } else {
      formula = num1 * num2;
      textBar.innerHTML = formula;
      num1 = formula;
      num2 = 0;
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
          num2 = 0;
        }

      } else if (operator === "+"){
        formula = num1 + num2;
        textBar.innerHTML = num1 + num2;
        num1 = formula;
        num2 = 0;

      } else if (operator === "-"){
        formula = num1 - num2;
        textBar.innerHTML = num1 - num2;
        num1 = formula;
        num2 = 0;

      } else if (operator === "*"){
        formula = num1 * num2;
        textBar.innerHTML = num1 * num2;
        num1 = formula;
        num2 = 0;
      }
      operator = "/";

    } else {
      if (num2 === 0) {
        textBar.innerHTML = num1;
      } else {
        formula = num1 / num2;
        textBar.innerHTML = formula;
        num1 = formula;
        num2 = 0;
      }
    }
  }
}
//Restart wyświetlacza
function result() {
  if (operator === "+"){
    formula = num1 + num2;
    textBar.innerHTML = num1 + num2;
    num1 = formula;
    num2 = 0;
  } else if (operator === "-"){
      formula = num1 - num2;
      textBar.innerHTML = num1 - num2;
      num1 = formula;
      num2 = 0;

  } else if (operator === "*"){
    formula = num1 * num2;
    textBar.innerHTML = num1 * num2;
    num1 = formula;
    num2 = 0;
  } else if (operator === "/") {
    if (num2 === 0) {
      textBar.innerHTML = num1;
    } else {
      formula = num1 / num2;
      textBar.innerHTML = num1 / num2;
      num1 = formula;
      num2 = 0;
    }
  }
}
