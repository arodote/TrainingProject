import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private api = 'https://api-base.herokuapp.com/api/pub/projects';
  public projectListObs$: Observable<any> = null;
  public projectListLengthObs$: Observable<any> = null;
  constructor(private httpClient: HttpClient) {}

  public findProject(p: any) {
    if (p.crit == 'id') {
      this.projectListObs$ = this.httpClient.get(this.api).pipe(map(this.transformData));
      return this.projectListObs$.pipe(map(pr => pr.filter(pr => pr.id == p.project.id)));
    } else if (p.crit == 'name') {
      this.projectListObs$ = this.httpClient.get(this.api).pipe(map(this.transformData));
      return this.projectListObs$.pipe(map(pr => pr.filter(pr => pr.name.includes(p.project.name))));
    }
  }

  public newProject(p: any) {
    if (p.name == '') {
      return false;
    }
    this.httpClient.post(this.api, p).subscribe();
    return true;
  }

  public getProjectList() {
    this.projectListObs$ = this.httpClient.get(this.api).pipe(map(this.transformData));
    return this.projectListObs$;
  }

  public getProjectListById(id: any) {
    this.projectListObs$ = this.httpClient.get(this.api).pipe(map(this.transformData));
    return this.projectListObs$.pipe(map(pr => pr.filter(pr => pr.id == id)));
  }

  private transformData(pList) {
    pList.forEach(fila => (fila.id = fila._id));
    return pList;
  }

  public getProjectListSize() {
    this.projectListLengthObs$ = this.httpClient.get(this.api).pipe(map((p: any) => p.length));
    return this.projectListLengthObs$;
  }
}
