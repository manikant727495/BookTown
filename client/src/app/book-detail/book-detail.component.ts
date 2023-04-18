import { Component, OnInit } from '@angular/core';
import { BookService } from "../services/book.service";
import {Book} from  '../Book';
import { ActivatedRoute,Route,Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  public id: string = this.route.snapshot.params.id;
  selectedBook: any;


  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.bookService.getBookById(this.id)
    .subscribe((data:any) =>{
      this.selectedBook = data;
    });
  }

  addTocart(selectedBook:any){
    if(localStorage.getItem('auth-token')){

    }else{
      this.router.navigateByUrl('/login');
    }
  }
  
}
