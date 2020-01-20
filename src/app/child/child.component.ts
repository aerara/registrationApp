import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Info } from '../Info';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() registered: Array<Info>;
  @Output() edit = new EventEmitter();
  @Output() display = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  Edit(info: any) {
    this.edit.emit(info);
  }

  addRegister(){
    this.display.emit();
  }
}
