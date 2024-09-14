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

function getDay(date) {
  const dateDay = new Date(date);
  const daysArr = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четверг",
    "Пʼятниця",
    "Субота",
  ];

  const dayIndex = dateDay.getDay();
  return daysArr[dayIndex];
}

console.log(getDay("2004-02-19"));

/*3.(Date)Напишіть функцію, яка вираховує, скільки днів залишилося до наступного Нового року (1 січня).
Функція повинна враховувати, чи є поточний рік високосним. */
function dayToNewYear() {
  const today = new Date();
  const yearNow = today.getFullYear();
  const nextYear = yearNow + 1;

  const leapYear = isleapYear(yearNow);

  const nextNewYearDate = new Date(nextYear, 0, 1);

  const millisecondsDiffrence = nextNewYearDate - today;

  const millisecondToDay = Math.ceil(
    millisecondsDiffrence / (1000 * 60 * 60 * 24)
  );

  let leap;
  if (leapYear === true) {
    leap = "высокосный";
  } else {
    leap = "не высокосный";
  }

  function isleapYear(year) {
    if (year % 400 == 0) return true;
    else if (year % 100 == 0) return false;
    else if (year % 4 == 0) return true;
    else return false;
  }
  return `${millisecondToDay} дней до нового года - Сейчас ${leap} год`;
}

console.log(dayToNewYear());
