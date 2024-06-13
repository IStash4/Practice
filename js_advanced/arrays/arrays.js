var arr = [1,2,3,4,5]
function increaseArray(newArr)
{
  return newArr.map(number => number*1.1)
}
let newArr = increaseArray(arr);
console.log(newArr);