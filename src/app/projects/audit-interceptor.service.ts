import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotifStoreService } from './notif-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuditInterceptorService implements HttpInterceptor {
  constructor(private notificationsStore: NotifStoreService) {}
  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.notificationsStore.dispatch(req.url + "; with Date: " + new Date());
    return next.handle(req);
  }
}
