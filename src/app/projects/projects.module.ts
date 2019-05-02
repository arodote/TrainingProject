import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AuditInterceptorService } from './audit-interceptor.service';
import { NotifStoreService } from './notif-store.service';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsService } from './projects.service';
import { FilterFormComponent } from './projects/filter-form/filter-form.component';
import { NewFormComponent } from './projects/new/new-form/new-form.component';
import { NewComponent } from './projects/new/new.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerFormComponent } from './projects/viewer/viewer-form/viewer-form.component';
import { ViewerComponent } from './projects/viewer/viewer.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ViewerComponent,
    NewComponent,
    NewFormComponent,
    ViewerFormComponent,
    ProjectsListComponent,
    FilterFormComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule, MatBadgeModule],
  providers: [
    ProjectsService,
    NotifStoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuditInterceptorService,
      multi: true
    }
  ]
})
export class ProjectsModule {}
