import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ProjectsService } from '../../projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public numProjects;
  constructor(private projectsService: ProjectsService) {
    this.numProjects = this.projectsService.getProjectListSize();
  }

  ngOnInit() {}
}
