import Book from './Book.js';

export default class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat; 
  }
  get fileFormat() { return this._fileFormat; }
  set fileFormat(value) {
    if (typeof value !== 'string' || !value.trim()) {
      throw new TypeError('fileFormat має бути непорожнім рядком');
    }
    const allowed = ['pdf', 'epub', 'mobi', 'azw3', 'txt'];
    const normalized = value.trim().toLowerCase();
    if (!allowed.includes(normalized)) {
      throw new RangeError(`Непідтримуваний формат. Дозволені: ${allowed.join(', ')}`);
    }
    this._fileFormat = normalized;
  }

printInfo() {
    const info = `«${this.title}» — ${this.author}, ${this.year} рік. Формат: ${this.fileFormat.toUpperCase()}.`;
    console.log(info);
    return info;
  }

  static fromBook(book, fileFormat) {
    if (!(book instanceof Book)) {
      throw new TypeError('Аргумент має бути екземпляром Book або його нащадка');
    }
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}