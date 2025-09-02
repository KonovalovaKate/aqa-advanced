import Book from './Book.js';
import EBook from './EBook.js';

const b1 = new Book('Місто', 'Валер’ян Підмогильний', 1928);
const b2 = new Book('Тигролови', 'Іван Багряний', 1944);
const b3 = new Book('Захар Беркут', 'Іван Франко', 1883);

b1.printInfo();
b2.printInfo();
b3.printInfo();

const eb1 = new EBook('Кайдашева сім’я', 'Іван Нечуй-Левицький', 1879, 'epub');
eb1.printInfo();

b1.title = 'Місто (оновлене видання)';
b1.year = 1929;
console.log('Оновлена назва:', b1.title);
console.log('Оновлений рік:', b1.year);

const oldest = Book.oldest([b1, b2, b3, eb1]);
console.log('Найдавніша книга:');
oldest.printInfo();

const eb2 = EBook.fromBook(b2, 'pdf');
console.log('Створено EBook з Book:');
eb2.printInfo();