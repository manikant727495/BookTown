import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [  {path: 'home', component: HomeComponent},
                          {path: 'search-result', component: BookComponent },
                          {path: 'bookdetail/:id', component: BookDetailComponent},
                          {path: 'cart', component: CartComponent},
                          {path: 'add',component:AddBookComponent},
                          {path: 'update/:id',component:UpdateComponent},
                          {path: 'search-results/:searchedText',component:SearchResultComponent},
                          {path: 'login',component:LoginComponent},
                          {path: 'signup',component:SignupComponent},
                          {path: '', component: HomeComponent} 
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
