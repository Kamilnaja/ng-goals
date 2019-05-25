import { Component, OnInit } from '@angular/core';
import { Goal } from 'interfaces/goal';

@Component({
  selector: 'go-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  public goals: Goal[];
  constructor() { }

  ngOnInit() {
  }

}
