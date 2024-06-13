"use strict";

function factorial(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger) 
    {
    throw new Error("Число должно быть целым и неотрицательным");
    }

  if (n === 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(8));