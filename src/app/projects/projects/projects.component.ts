import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects$: any;
  //private cont;
  //private contUpdated;

  constructor(private projectsService: ProjectsService) {
    //this.cont = 0;
    this.projects$ = this.projectsService.getProjectList();
  }
  ngOnInit() {}
  public onSearch(p: any) {
    if (p.crit != null && p.crit != '') {
      this.projects$ = this.projectsService.findProject(p);
    }
    return;
  }
  //ngDoCheck() {
  //this.projectsService.getProjectListSize().subscribe(response => {
  //if ( response != this.contUpdated ) {
  //console.log("asd")
  //this.contUpdated = response;
  //}
  //});
  // console.log(this.cont + '-.-' + this.contUpdated);
  // if ( this.cont != this.contUpdated ) {
  //   console.log( "ENTRAS" );
  //  this.projectsService.getProjectListSize().subscribe(response => (this.cont = response));
  // this.projects$ = this.projectsService.getProjectList();
  // }
  //  }

  public onReset() {
    this.projects$ = this.projectsService.getProjectList();
    return;
  }
}
