import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Book } from '../Book';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [];
  bookUrl = `http://localhost:4000/api/books/`;

  constructor(private httpClient: HttpClient) { }

  getAllBooks() {
    const headers = new HttpHeaders( {
        Accept: 'application/json',
      ' Content-Type': 'application/json'
    } );
    const options = {
        headers
    };
    return this.httpClient.get(this.bookUrl,options);

  }
  getBookById(id: string) {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
    const options = {
        headers
    };
    const bookUrl = this.bookUrl + id;
    return this.httpClient.get(bookUrl,options);
  }


  addBook(newBook: any)
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.httpClient.post<any>('http://localhost:3000/api/book',newBook);
  }

  deleteBook(id: string)
  {
    return this.httpClient.delete<any>('http://localhost:3000/api/book/'+id);
  }

  updateBook(id:string, newBook:any){
    console.log(id);
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    var url = 'http://localhost:3000/api/books/update/'+id;
    return this.httpClient.put<any>(url, newBook);
  }
}
