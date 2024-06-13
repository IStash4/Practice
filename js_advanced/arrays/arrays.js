let arr = [1,2,3,4,5]
function increaseArray(arr)
{
  for(let i = 0; i < arr.length; i++)
    var temp;
    arr[i] = arr[i] + arr[i] * 0.1; 
}

console.log(arr);