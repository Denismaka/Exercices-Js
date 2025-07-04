



export function addition(a, b) {
    return a + b;
}

export function soustraction(a, b) {
    return a - b;
}

export function multiplication(a, b) {
  return a * b;
}

export function division(a, b) {
    if (b === 0) {
        throw new Error("Division par zéro impossible !");
    }
    return a / b;
}
