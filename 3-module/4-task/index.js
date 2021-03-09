
function showSalary(users, age) {
  let sortUsers = users.filter(item => item.age <= age);
  
  
   let salaryData = sortUsers.map((item, index) =>  {if (index === sortUsers.length - 1) {return `${item.name}, ${item.balance}`}  else { return `${item.name}, ${item.balance}\n`}
   
   })
   return salaryData.join('')
   }