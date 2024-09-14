/*1.(Date)Напишіть функцію, яка приймає дату народження у форматі "YYYY-MM-DD"
і повертає вік користувача на поточний момент.*/
function userYears(birthday) {
  const birthDate = new Date(birthday);
  console.log(birthDate);
  const todayDate = new Date();

  let age = todayDate.getFullYear() - birthDate.getFullYear();
  console.log(age);
  const mounthDifference = todayDate.getMonth() - birthDate.getMonth();
  const dayDifference = todayDate.getDate() - birthDate.getDate();
  console.log(mounthDifference);
  console.log(dayDifference);
  if (mounthDifference < 0 || (mounthDifference === 0 && dayDifference < 0)) {
    age--;
  }
  return age;
}

console.log(userYears("2004-02-19")); //20

/*2.(Date)Напишіть функцію, яка приймає дату у форматі "YYYY-MM-DD"
і повертає назву дня тижня для цієї дати. */
