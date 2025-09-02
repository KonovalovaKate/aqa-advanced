export default class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() { return this._title; }
  set title(value) {
    if (typeof value !== 'string' || !value.trim()) {
      throw new TypeError('title має бути непорожнім рядком');
    }
    this._title = value.trim();
  }

  get author() { return this._author; }
  set author(value) {
    if (typeof value !== 'string' || !value.trim()) {
      throw new TypeError('author має бути непорожнім рядком');
    }
    this._author = value.trim();
  }

  get year() { return this._year; }
  set year(value) {
    const y = Number(value);
    const current = new Date().getFullYear();
    if (!Number.isInteger(y) || y < 1440 || y > current) {
      throw new RangeError(`year має бути цілим у діапазоні 1440..${current}`);
    }
    this._year = y;
  }

  printInfo() {
    const info = `«${this.title}» — ${this.author}, ${this.year} рік.`;
    console.log(info);
    return info;
  }

    static oldest(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new TypeError('Передайте непорожній масив екземплярів Book/EBook');
    }
    for (const b of books) {
      if (!(b instanceof Book)) {
        throw new TypeError('У масиві мають бути лише екземпляри класу Book або його нащадків');
      }
    }
    return books.reduce((min, b) => (b.year < min.year ? b : min));
  }
}