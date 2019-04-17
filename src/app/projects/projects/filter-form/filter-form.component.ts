import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {
  public project: { id: number, name: String };
  @Output() public search = new EventEmitter();
  constructor() {
    this.project = { id: 0, name: ''};
  }

  ngOnInit() {
  }

}
