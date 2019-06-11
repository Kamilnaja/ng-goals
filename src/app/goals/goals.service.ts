import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from 'interfaces/goal';
import { Observable } from 'rxjs';
import { options } from './../../shared/options';

@Injectable()
export class GoalsService {
  constructor(private http: HttpClient) { }

  getGoals() {
    return this.http.request<Goal[]>('GET', `${options.backendUrl}/goals`, { responseType: 'json' });
  }

  getGoal(id: string) {
    return this.http.request<Goal>('GET', `${options.backendUrl}/goals/${id}`, { responseType: 'json' });
  }

  deleteGoal(index: number): Observable<{}> {
    return this.http.delete(`${options.backendUrl}/goals/${index}`);
  }

  saveGoal(description: string): Observable<{}> {
    return this.http.post<Goal[]>(`${options.backendUrl}/goals`, description, {
      responseType: 'json'
    });
  }

}
