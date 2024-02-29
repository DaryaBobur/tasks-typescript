/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  Monday = 'WorkDay',
  Tuesday = 'WorkDay',
  Wednesday = 'WorkDay',
  Thursday = 'WorkDay',
  Friday = 'WorkDay',
  Sunday = 'Weekend',
  Saturday = 'Weekend',
}


const isWeekend = (day:string):boolean => {
  if(day === 'WorkDay') {
    return true;
  }
return false;
  
};

isWeekend(Week.Sunday)