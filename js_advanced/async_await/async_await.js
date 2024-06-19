async function fetchData(url) 
{
  try 
  {
    const response = await fetch(url);
    if (!response.ok) 
    {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } 
    catch (error) 
    {
      console.error(`Fetch error: ${error}`);
      throw error;
    }
}

const ApiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

fetchData(ApiUrl)
  .then(data => 
    {
      console.log('Data received:', data);
    })
  .catch(error => 
    {
      console.error('Error:', error);
    });
