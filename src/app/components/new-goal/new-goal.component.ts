import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoalsService } from '../goals/goals.service';

@Component({
  selector: 'go-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.scss', './../../../shared/styles/form.scss']
})
export class NewGoalComponent implements OnInit {
  public showInfo = false;
  public goalForm: FormGroup;

  @Output() emitter: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('#description') description: ElementRef;
  @ViewChild('#title') title: ElementRef;

  constructor(private fb: FormBuilder, private goalService: GoalsService) {}

  ngOnInit() {
    this.goalForm = this.fb.group({
      description: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required)
    });
  }

  public handleSubmit(): void {
    if (this.goalForm.get('description').value && this.goalForm.get('title').value) {
      this.goalService.saveGoal(this.goalForm.value).subscribe(() => this.goalService.getGoals());
      this.goalForm.get('description').setValue(null);
      this.goalForm.get('title').setValue(null);
      this.emitter.emit(true);
      this.showInfo = false;
    } else {
      this.showInfo = true;
    }
  }
}
