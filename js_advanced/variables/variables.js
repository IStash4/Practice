function testVariable() {
    if (true) {
        var xVar = "1";
        let xLet = "2";
        const xConst = "3";
        
        console.log("Inside block:");
        console.log("Var:", xVar);  
        console.log("Let:", xLet);  
        console.log("Const:", xConst);
    }

    console.log("Outside block:");

    //Доступны вне блока
    console.log("Var:", xVar);

    //Недоступны вне блока   
    console.log("Let:", xLet); 
    console.log("Const:", xConst);     
}

testVariable();
