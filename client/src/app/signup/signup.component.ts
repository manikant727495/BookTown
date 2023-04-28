import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmitSignup(signupFormData:NgForm){
    this.authService.createUser(signupFormData.value)
    .subscribe((data:any)=>{
      if(data.success){
        console.log(data.success);
      } else {
        console.log(data.error);
      }
    })
  }

}
