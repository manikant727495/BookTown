import { Injectable } from '@angular/core';
import { Book } from '../Book';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public books:Book[]=[];
  cartUrl = `http://localhost:4000/api/cart`;
  constructor(private httpClient: HttpClient){
  }
  getCartItem(authToken:any){
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'auth-token' : authToken
    })
    const requestBody = {
    }

    const options = {
      headers,
    }
    
    return this.httpClient.post(`${this.cartUrl}/getcartitem`,requestBody,options);
  }
  addItemToCart(bookId:any, authToken:any){
    console.log(authToken);
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'auth-token' : authToken
    })

     const options = {
      headers,
     }
     const requestBody = {
        bookId:bookId
     }

     return this.httpClient.post(`${this.cartUrl}/addtocart` , requestBody, options);
  }


}