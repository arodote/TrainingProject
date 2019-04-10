import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public project = { id: environment.projects.length, name: '' };
  constructor() {}
  ngOnInit() {}
  public saveNewProject() {
    environment.projects.push(this.project);
  }
}
