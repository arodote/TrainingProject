import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifStoreService {
  private lastUrl$ = new BehaviorSubject<any>('');

  constructor() {}

  public msg$ = () => this.lastUrl$.asObservable();

  public dispatch(url) {
    this.lastUrl$.next(url);
  }
}
