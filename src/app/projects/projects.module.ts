import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AuditInterceptorService } from './audit-interceptor.service';
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
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    ProjectsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuditInterceptorService,
      multi: true
    }
  ]
})
export class ProjectsModule {}
