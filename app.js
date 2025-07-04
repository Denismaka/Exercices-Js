// #############################################
// système de modules
// #############################################
import { addition, soustraction, multiplication, division } from "./mathUtils.js";

export function calculatrice(a, b, operation) {
  switch (operation) {
    case "+":
      return addition(a, b);
    case "-":
      return soustraction(a, b);
    case "*":
      return multiplication(a, b);
    case "/":
      try {
        return division(a, b);
      } catch (e) {
        return e.message;
      }
    default:
      return "Opération non reconnue";
  }
}

export const som = (items) => items.reduce((acc, item) => acc + item, 0);