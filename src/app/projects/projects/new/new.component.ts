import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public project = { id: environment.projects.length, name: '' };
  public claseError = 'hidden';
  constructor(private router: Router) {}
  ngOnInit() {}
  public onNew() {
    if (this.project.name == '') {
      this.claseError = '';
      return;
    }
    for (let index = 0; index < environment.projects.length; index++) {
      if (this.project.name==environment.projects[index].name) {
        this.claseError = '';
        return;
      }

    }
    environment.projects.push(this.project);
    this.project = { id: environment.projects.length, name: '' };
    this.claseError = 'hidden';
    this.router.navigateByUrl('/projects');
  }
}
