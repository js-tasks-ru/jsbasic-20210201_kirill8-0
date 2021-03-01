let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {
  
    let sum = 0;
  
    for (let sal in salaries) {
      
      if (Number.isFinite(salaries[sal])) {
       sum += salaries[sal];
      } else{sum += 0}
       }
      return(sum)
      }
  sumSalary(salaries)