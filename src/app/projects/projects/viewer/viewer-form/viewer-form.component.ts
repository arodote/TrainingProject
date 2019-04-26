import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewer-form',
  templateUrl: './viewer-form.component.html',
  styleUrls: ['./viewer-form.component.css']
})
export class ViewerFormComponent implements OnInit {
  @Input() public listPro;
  @Input() public projId: string;
  constructor() { }

  ngOnInit() {
  }

}
