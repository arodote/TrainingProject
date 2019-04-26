import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public project = { id: '', name: '' };
  public claseError = 'hidden';
  constructor(private router: Router, private projectsService: ProjectsService) {}
  ngOnInit() {}
  public onNew() {
    if (this.projectsService.newProject(this.project)) {
      this.project = { id: '', name: '' };
      this.claseError = 'hidden';
      this.router.navigateByUrl('/projects');
    } else {
      this.claseError = '';
    }
    return;
  }
}
