function checkInteger(a) {
  if (!Number.isInteger(a)) {
      throw new Error("Введенное число не является целым");
  }
  return a;
}

try {
  console.log(checkInteger(1)); 
  console.log(checkInteger(1.3));
} catch (error) {
  console.error(error.message);
}