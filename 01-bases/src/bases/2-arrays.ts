    const numberArray = [1, 2, 3, 4, 5];

    numberArray.push(6);

    //aqui marca error porque estamos intentando añadir un string a un array de números
//en js si se puede hacer esto por lo que si hacemos un console log no dara error
    //pero en typescript si que lo marca como error
    // al mandar la a produccion tmbien marcara el error

    //numberArray.push('7'); 

    //la forma correcta de mesclar tipos dentro de un arreglo en ts es usar los tipos 
    const mixedArray: (number | string)[] = [1, 2, 3, '4', '5'];

    mixedArray.push(6);
    mixedArray.push('7');
    
    console.log('numberArray', numberArray);
    console.log('mixedArray', mixedArray);

export{};