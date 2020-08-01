import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'go-info-strip',
  templateUrl: './info-strip.component.html',
  styleUrls: ['./info-strip.component.scss']
})
export class InfoStripComponent implements OnInit {

  @Input() text: string;
  constructor() { }
  ngOnInit() {
  }

}
