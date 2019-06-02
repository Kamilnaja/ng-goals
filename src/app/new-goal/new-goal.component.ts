import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { GoalsService } from '../goals/goals.service';

@Component({
  selector: 'go-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.scss']
})
export class NewGoalComponent implements OnInit {
  public goalForm: FormGroup;
  @Output() emitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder, private goalService: GoalsService) { }

  ngOnInit() {
    this.goalForm = this.fb.group({
      description: new FormControl('')
    });
  }

  handleSubmit(): void {
    console.log(this.goalForm.value);
    this.goalService.saveGoal(this.goalForm.value)
      .subscribe(item => this.goalService.getGoals());
      this.emitter.emit(true);
      // emit refresh
  }
}
