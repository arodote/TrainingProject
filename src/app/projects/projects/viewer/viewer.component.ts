import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  public projId = '';
  public projects$: any;
  constructor( private activateRoute: ActivatedRoute, private projectsService: ProjectsService ) {

    this.activateRoute.params.subscribe(routeParams => {
      this.projId = activateRoute.snapshot.params.id;
    } );
    this.projects$ = this.projectsService.getProjectListById(this.projId);
  }

  ngOnInit() {}
}
