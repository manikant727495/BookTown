import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmitLogin(loginFormData:any){
    // add form validation here
    const user = loginFormData.value;
    console.log(user);
    if(user.email && user.password){
      this.authService.ValidateUser(user)
      .subscribe( (data:any) =>{
        if(data.success){
          localStorage.setItem('auth-token',data.success);
          this.router.navigateByUrl('/home');
        } else {
          // todo-show the error message on page
          console.log(data.error);
        }
      })
    }
  }

}
