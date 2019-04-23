import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects = environment.projects;

  constructor(private projectsService: ProjectsService) {}
  ngOnInit() {}
  public onSearch(p: any) {
    if (p.crit != null && p.crit != '') {
      this.projects = this.projectsService.findProject(p);
    }
    return;
  }
  public onReset() {
    this.projects = environment.projects;
    return;
  }
}
