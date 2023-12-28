import { Component, OnInit } from '@angular/core';
import { BookService } from "../services/book.service";
import { CartService } from '../services/cart.service';
import {Book} from  '../Book';
import { ActivatedRoute,Route,Router } from '@angular/router';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  public id: string = this.route.snapshot.params.id;
  selectedBook: any;
  AddToCartButtonText = "Add to cart";
  growlMessage = '';


  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
    private cartService: CartService
  ){ }

  ngOnInit(): void {
    this.bookService.getBookById(this.id)
    .subscribe((data:any) =>{
      this.selectedBook = data;
    });
  }

  addToCart(selectedBook:any){
    if(localStorage.getItem('auth-token')){
      this.addItemToCart(selectedBook);
    }else{
      this.router.navigateByUrl('/login');
    }
  }

  addItemToCart(selectedBook:any){
    const authToken = localStorage.getItem('auth-token');
    this.cartService.addItemToCart(selectedBook._id,authToken).subscribe((data:any) =>{
        if(data.success){
          this.growlMessage = data.success;
          setTimeout(()=>{
            this.growlMessage = '';
          },3000)
        }
    });
  }
  
}
