import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  public listPro = environment.projects;
  public projId = '';
  constructor(activateRoute: ActivatedRoute) {
    this.projId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {}
}
