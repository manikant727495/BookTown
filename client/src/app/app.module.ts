import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookService } from './services/book.service';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CartComponent } from './cart/cart.component';
import {CartService} from './services/cart.service';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateComponent } from './update/update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultItemComponent } from './search-result/search-result-item/search-result-item.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    CartComponent,
    AddBookComponent,
    UpdateComponent,
    NavbarComponent,
    HomeComponent,
    InputComponent,
    SearchResultComponent,
    SearchResultItemComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
