import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from 'interfaces/goal';
import { Observable } from 'rxjs';

@Injectable()
export class GoalsService {
  private readonly backend = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getGoals() {
    return this.http.request<Goal[]>('GET', `${this.backend}/goals`, { responseType: 'json' });
  }

  getGoal(id: string) {
    return this.http.request<Goal>('GET', `${this.backend}/goals/${id}`, { responseType: 'json' });
  }

  deleteGoal(index: number): Observable<{}> {
    return this.http.delete(`${this.backend}/goals/${index}`);
  }

  saveGoal(description: string): Observable<{}> {
    return this.http.post<Goal[]>(`${this.backend}/goals`, description, {
      responseType: 'json'
    });
  }

}
