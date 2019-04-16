import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { NewComponent } from './projects/new/new.component';
import { ViewerComponent } from './projects/viewer/viewer.component';
import { viewParentEl } from '@angular/core/src/view/util';
import { DashboardComponent } from './projects/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'viewer/:id',
        component: ViewerComponent
      },
      {
        path: 'new',
        component: NewComponent
      }, {
      path: '',
      component: DashboardComponent,
      outlet: 'dashboard'
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
