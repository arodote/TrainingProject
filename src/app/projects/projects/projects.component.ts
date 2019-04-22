import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects = environment.projects;

  constructor() {}
  ngOnInit() {}
  public onSearch( p: any ) {
    this.projects = environment.projects;
    if (p.crit != null && p.crit != '') {
      if (p.crit == 'id') {
        this.projects = this.projects.filter(pr => pr.id == p.project.id);
        return;
      } else if(p.crit == 'name'){
        this.projects = this.projects.filter(pr => pr.name.includes(p.project.name));
        return;
      }
    }
    return;
  }
  public onReset() {
    this.projects = environment.projects;
    return;
  }
}
