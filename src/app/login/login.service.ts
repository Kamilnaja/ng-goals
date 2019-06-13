import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login.interface';
import { options } from 'src/shared/options';

@Injectable()
export class LoginService {
  constructor(private http?: HttpClient) { }

  public submit(body: Login): Observable<Login> {
    return this.http.post<Login>(`${options.backendUrl}/api/login`, body);
  }
}
