import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {
  public crit: string;
  public project: { id: number, name: String };
  @Output() public search = new EventEmitter();
  @Output() public reset = new EventEmitter();
  constructor() {


  }

  ngOnInit() {
    this.project = { id: null, name: ''};
  }
  public res() {
    this.project = { id: null, name: '' };
    this.crit = "";
}
}
