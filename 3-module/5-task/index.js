

function getMinMax(str) {

  // ...
  let arr = str.split(',')
  arr = arr.join(' ')
  arr = arr.split(' ')
  let numbers = arr.map(number => +number).filter(number => !isNaN(number))  
/*   return arr
   */ 
   
  return {min : Math.min(...numbers),
    max : Math.max(...numbers),
}

  }

getMinMax(inputData); // { min: -5.8, max: 73  }