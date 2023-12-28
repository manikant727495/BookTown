import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  books: Book[] = [];
  imageWidth: number = 50;
  imageMargin: number = 2;
  cartItems: any;
  constructor(private cartService: CartService) { }



  ngOnInit(): void {
    const authToken = localStorage.getItem('auth-token');
    this.cartService.getCartItem(authToken).subscribe((data)=>{
        this.cartItems = data;
    });
  }

  onDelete(book: Book) {
    let index = this.books.indexOf(book);
    this.books.splice(index, 1);
  }

}
