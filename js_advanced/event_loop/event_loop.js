function delayedCallback(callback) 
{
  setTimeout(callback, 2000);
}

function Callback() 
{
  console.log("Callback function called after 2 seconds");
}

delayedCallback(Callback);