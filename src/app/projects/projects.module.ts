import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerComponent } from './projects/viewer/viewer.component';
import { NewComponent } from './projects/new/new.component';
import { FormsModule } from '@angular/forms';
import { NewFormComponent } from './projects/new/new-form/new-form.component';
import { ViewerFormComponent } from './projects/viewer/viewer-form/viewer-form.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { FilterFormComponent } from './projects/filter-form/filter-form.component';

@NgModule({
  declarations: [ProjectsComponent, ViewerComponent, NewComponent, NewFormComponent, ViewerFormComponent, ProjectsListComponent, FilterFormComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }
