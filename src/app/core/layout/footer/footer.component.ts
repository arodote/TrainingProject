import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifStoreService } from '../../../projects/notif-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public lastUrl$: any;
  message: string;
  action: string;
  constructor(private notif: NotifStoreService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.lastUrl$ = this.notif.msg$();
  }
  openSnackBar() {
    this.message = 'YOU SHALL NOT PASS! NOW FLY, YOU FOOL!';
    this.action = 'Close';
    this.snackBar.open(this.message, this.action, {
      duration: 5000
    });
  }
}
