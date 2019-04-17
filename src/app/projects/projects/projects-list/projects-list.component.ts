import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @Input() public projects: {id:number, name:string};
  constructor() { }

  ngOnInit() {
  }

}
