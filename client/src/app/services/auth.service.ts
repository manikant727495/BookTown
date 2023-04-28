import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  authUrl = "http://localhost:4000/api/auth";

  constructor(private httpClient: HttpClient) {}

  ValidateUser(user: any) {
    const headers = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json",
    });

    const options = {
      headers
    };
    return this.httpClient.post(`${this.authUrl}/login`, user, options);
  }

  createUser(user: any) {
    const headers = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json",
    });

    const options = {
      headers,
    };

    const requestBody = {
      name : user.name,
      email : user.email,
      password: user.password
    }

    return this.httpClient.post(`${this.authUrl}/createuser`, requestBody, options);
  }

}
