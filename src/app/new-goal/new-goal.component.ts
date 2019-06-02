import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { GoalsService } from '../goals/goals.service';

@Component({
  selector: 'go-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.scss']
})
export class NewGoalComponent implements OnInit {
  public goalForm: FormGroup;

  constructor(private fb: FormBuilder, private goalService: GoalsService) { }

  ngOnInit() {
    this.goalForm = this.fb.group({
      id: new FormControl(''),
      description: new FormControl('')
    });
  }

  handleSubmit(): void {
    console.log(this.goalForm.value);
    this.goalService.saveGoal(this.goalForm.value).subscribe(item => console.log(item));
  }
}
