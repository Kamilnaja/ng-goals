import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from 'interfaces/goal';

@Injectable()
export class GoalsService {
  private readonly backend = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getGoals() {
    return this.http.request<Goal[]>('GET', `${this.backend}/goals`, { responseType: 'json' });
  }
}
