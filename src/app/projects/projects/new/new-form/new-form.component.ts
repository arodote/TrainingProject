import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
  @Input() public form: FormGroup;
  @Input() public errorF;
  @Input() public claseError: String;
  @Output() public new = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
