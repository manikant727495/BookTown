import { Injectable } from '@angular/core';
import { Book } from '../Book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public books:Book[]=[];
  constructor(private httpClient: HttpClient){
  }
  getCartItem(){
    
  }
  AddItemToCart(book:any){

  }

}