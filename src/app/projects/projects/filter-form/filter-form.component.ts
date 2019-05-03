import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {
  @Output() public search = new EventEmitter();
  @Output() public reset = new EventEmitter();
  @Input() public form: FormGroup;
  @Input() public errorF;
  constructor() {}

  ngOnInit() {}

  public res() {
    this.form.get('id').setValue('');
    this.form.get('crit').setValue('');
    this.form.get('name').setValue('');
  }
}
