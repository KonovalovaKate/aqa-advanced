const averageGrade = 85;
const gradeGroup = Math.floor(averageGrade / 10);

switch (gradeGroup) {
  case 10:
  case 9:
    console.log("Відмінно");
    break;
  case 8:
    console.log("Дуже добре");
    break;
  case 7:
    console.log("Добре");
    break;
  case 6:
    console.log("Задовільно");
    break;
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Незадовільно");
    break;
  default:
    console.log("Помилка: оцінка повинна бути від 0 до 100");
}