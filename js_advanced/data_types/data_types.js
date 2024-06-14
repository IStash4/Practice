function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
      return false;
  }

  for (let key of keys1) {
      if (!(key in obj2) || obj1[key] !== obj2[key]) {
          return false;
      }
  }
  return true;
}

const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {a: 1, b: 2, c: 4};

console.log(compareObjects(obj1, obj1)); //  true
console.log(compareObjects(obj1, obj2)); //  false