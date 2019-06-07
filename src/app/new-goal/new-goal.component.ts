import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoalsService } from '../goals/goals.service';

@Component({
  selector: 'go-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.scss']
})
export class NewGoalComponent implements OnInit {
  public goalForm: FormGroup;
  @Output() emitter: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('#description') description: ElementRef;

  constructor(private fb: FormBuilder, private goalService: GoalsService) { }

  ngOnInit() {
    this.goalForm = this.fb.group({
      description: new FormControl('', Validators.required)
    });
  }

  public handleSubmit(): void {
    this.goalService.saveGoal(this.goalForm.value)
      .subscribe(() => this.goalService.getGoals());
    this.goalForm.get('description').setValue(null);
    this.emitter.emit(true);
  }
}
