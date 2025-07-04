export interface Idata {
  preventDefault(): unknown;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: number;
  price: number;
  img: string;
}

export interface Roots {
  author: string;
  available: number;
  copies: number;
  genre: string;
  img: string;
  isbn: string;
  price: number;
  title: string;
}
export interface Root {
  _id: string;
  totalQuantity: number;
  copies: number;
  isbn: string;
  title: string;
}

export type Book = {
  _id: string;
  title: string;
  author: string;
  isbn: string;
  copies: number;
  available: number;
};

export type BookData = {
  book: Book;
  totalQuantity: number;
};
