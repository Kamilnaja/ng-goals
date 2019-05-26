import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'go-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() isVisible = false;
  @Output() emitter: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setVisible(condition: boolean) {
    this.isVisible = condition;
  }

  setModalClosed() {
    this.emitter.emit(false);
  }
}
