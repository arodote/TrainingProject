import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerComponent } from './projects/viewer/viewer.component';
import { NewComponent } from './projects/new/new.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectsComponent, ViewerComponent, NewComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }