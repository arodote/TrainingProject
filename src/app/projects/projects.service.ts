import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private api = 'https://api-base.herokuapp.com/api/pub/projects';
  constructor() {}

  public findProject(p: any) {
    if (p.crit == 'id') {
      return environment.projects.filter(pr => pr.id == p.project.id);
    } else if (p.crit == 'name') {
      return environment.projects.filter(pr => pr.name.includes(p.project.name));
    }
  }

  public newProject(p: any) {
    if (p.name == '') {
      return false;
    }
    for (let index = 0; index < environment.projects.length; index++) {
      if (p.name == environment.projects[index].name) {
        return false;
      }
    }
    environment.projects.push(p);
    return true;
  }
}
