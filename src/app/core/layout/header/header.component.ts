import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links: any[];
  activeLink;
  title = 'Home';
  constructor() {
    this.links = [
      {
        label: 'Home',
        link: '/',
        index: 0
      },
      {
        label: 'Projects',
        link: 'projects',
        index: 1
      }
    ];
    this.activeLink = this.links[0];
  }

  ngOnInit() {}
}
