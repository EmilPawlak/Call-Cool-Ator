'use strict';

var textBar = document.getElementById('textBar');
var inputValue;
var num1 = 0;
var num2;

function input(event) {
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

const CALCULATIONS = {
  add: function() {
    if (num2 === undefined) {
      multiNumber = 1;
      formula = num1 + num2;
      operator = "+";
      return textBar.innerHTML = num1;
    } else {
      //Podstawowe obliczenie gdy obie liczby są podane
      multiNumber = 1;
      if (operator === "+" || operator === undefined) {
        formula = num1 + num2;
        textBar.innerHTML = formula;
        num1 = formula;
        num2 = undefined;
      //sprawdza, czy nie jest wykonywane inne dzialanie i je dokańcza
      } else if (operator === "-"){
        formula = num1 - num2;
        textBar.innerHTML = num1 - num2;
        num1 = formula;
        num2 = undefined;
      } else if (operator === "*"){
        formula = num1 * num2;
        textBar.innerHTML = num1 * num2;
        num1 = formula;
        num2 = undefined;
      }
      else if (operator === "/") {
        if (num2 === 0) {
          textBar.innerHTML = num1;
        } else {
          formula = num1 / num2;
          textBar.innerHTML = num1 / num2;
          num1 = formula;
          num2 = undefined;
        }
      }
      operator = "+";
    }
  },
  subtract: function() {
    if (num2 === undefined) {
      multiNumber = 1;
      formula = num1 - num2;
      operator = "-";
      return textBar.innerHTML = num1;
    } else {
      multiNumber = 1;
      if (operator === "-" || operator === undefined) {
        formula = num1 + num2;
        textBar.innerHTML = formula;
        num1 = formula;
        num2 = undefined;
    } else if (operator === "+"){
      formula = num1 + num2;
      textBar.innerHTML = num1 + num2;
      num1 = formula;
      num2 = undefined;
    } else if (operator === "*"){
      formula = num1 * num2;
      textBar.innerHTML = num1 * num2;
      num1 = formula;
      num2 = undefined;
    } else if (operator === "/") {
      if (num2 === 0) {
        textBar.innerHTML = num1;
      } else {
        formula = num1 / num2;
        textBar.innerHTML = num1 / num2;
        num1 = formula;
        num2 = undefined;
      }
    }
      operator = "-";
    }
  },
  multiply: function() {
    if (num2 === undefined) {
      multiNumber = 1;
      formula = num1 * num2;
      operator = "*";
      return textBar.innerHTML = num1;
    } else {
      multiNumber = 1;
      if (operator === "*" || operator === undefined) {
        if (num2 === 0) {
          formula = num1;
          textBar.innerHTML =  num1;
        } else {
          formula = num1 * num2;
          textBar.innerHTML = formula;
          num1 = formula;
          num2 = undefined;
        }
      } else if (operator === "+"){
        formula = num1 + num2;
        textBar.innerHTML = num1 + num2;
        num1 = formula;
        num2 = undefined;
      } else if (operator === "-"){
        formula = num1 - num2;
        textBar.innerHTML = num1 - num2;
        num1 = formula;
        num2 = undefined;
      } else if (operator === "/"){
        if (num2 === 0) {
          textBar.innerHTML = num1;
        } else {
          formula = num1 / num2;
          textBar.innerHTML = num1 / num2;
          num1 = formula;
          num2 = undefined;
        }
      }
        operator = "*";
    }
  },
  divide: function() {
    if (num2 === undefined) {
      multiNumber = 1;
      formula = num1 / num2;
      operator = "/";
      return textBar.innerHTML = num1;
    } else {
      multiNumber = 1;
      if (operator === "/" || operator === undefined) {
        if (num2 === 0) {
          formula = num1;
          textBar.innerHTML = num1;
        } else {
          formula = num1 / num2;
          textBar.innerHTML = formula;
          num1 = formula;
          num2 = undefined;
        }
      } else if (operator === "+"){
        formula = num1 + num2;
        textBar.innerHTML = num1 + num2;
        num1 = formula;
        num2 = undefined;
      } else if (operator === "-"){
        formula = num1 - num2;
        textBar.innerHTML = num1 - num2;
        num1 = formula;
        num2 = undefined;
      } else if (operator === "*"){
        formula = num1 * num2;
        textBar.innerHTML = num1 * num2;
        num1 = formula;
        num2 = undefined;
      }
      operator = "/";
    }
  }
}
//Restart wyświetlacza
function result() {
  if (num2 === undefined) {
    textBar.innerHTML = num1;
  } else {
    if (operator === "+"){
      formula = num1 + num2;
      textBar.innerHTML = num1 + num2;
      num1 = formula;
      num2 = undefined;
    } else if (operator === "-"){
      formula = num1 - num2;
      textBar.innerHTML = num1 - num2;
      num1 = formula;
      num2 = undefined;
    } else if (operator === "*"){
      formula = num1 * num2;
      textBar.innerHTML = num1 * num2;
      num1 = formula;
      num2 = undefined;
    } else if (operator === "/") {
      if (num2 === 0) {
        textBar.innerHTML = num1;
      } else {
        formula = num1 / num2;
        textBar.innerHTML = num1 / num2;
        num1 = formula;
        num2 = undefined;
      }
    }
  }
  multiNumber = 1;
  num1 = 0;
  formula = undefined;
}