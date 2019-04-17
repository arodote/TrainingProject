import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects = environment.projects;

  constructor() {
      }
  ngOnInit() {}
  public onSearch(casa: { id: number, name: String }) {
    console.log( "IT WORKS" + casa.id + casa.name );
  }
}
