import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
  @Input() public project: {id:number, name:String};
  @Input() public claseError: String;
  @Output() public new = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
