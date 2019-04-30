import { Component, OnInit } from '@angular/core';
import { NotifStoreService } from '../../../projects/notif-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public lastUrl$: any;
  constructor(private notif: NotifStoreService) { }

  ngOnInit() {
    this.lastUrl$ = this.notif.msg$();
  }

}
