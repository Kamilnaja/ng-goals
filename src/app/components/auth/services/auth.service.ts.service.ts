import { Injectable } from '@angular/core';
import { Login } from '../login/login.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { options } from 'src/shared/options';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http?: HttpClient) {}

  public submit(body: Login): Observable<Login> {
    return this.http.post<Login>(`${options.backendUrl}/login`, body);
  }
}
