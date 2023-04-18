import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitLogin(loginFormData:any){
    // add form validation here
    if(loginFormData.email && loginFormData.password){

    }
  }

}
