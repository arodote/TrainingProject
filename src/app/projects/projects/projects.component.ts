import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects$: any;

  constructor(private projectsService: ProjectsService) {
    this.projects$ = this.projectsService.getProjectList();
  }
  ngOnInit() {}
  public onSearch(p: any) {
    if (p.crit != null && p.crit != '') {
      this.projects$ = this.projectsService.findProject(p);
    }
    return;
  }
  public onReset() {
    this.projects$ = this.projectsService.getProjectList();
    return;
  }
}
