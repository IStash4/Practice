function async(value) {
  return new Promise((resolve, reject) => {
      setTimeout(() => 
        { 
          console.log(`Operation with value: ${value}`);
          resolve(value * 2);
        } , 1000);
  });
}

function operations() {
  async(1)
      .then(result => {
          return async(result);
      })
      .then(result => {
          return async(result);
      })
      .then(result => {
          return async(result);
      })
      .then(result => {
          console.log(`Final result: ${result}`);
      });
}

operations();
