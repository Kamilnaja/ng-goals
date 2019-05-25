import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoalsService {
  constructor(private http: HttpClient) { }
  getGoals() {

  }
}
