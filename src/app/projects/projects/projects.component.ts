import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects$: any;
  public formGroup: FormGroup;

  constructor(private projectsService: ProjectsService, private formBuilder: FormBuilder) {
    //this.cont = 0;
    this.projects$ = this.projectsService.getProjectList();
  }
  ngOnInit() {
    this.buildForm();
  }

  public onSearch() {
    if (this.formGroup.get('crit').value != null && this.formGroup.get('crit').value != '') {
      this.projects$ = this.projectsService.findProject({
        crit: this.formGroup.get('crit').value,
        id: this.formGroup.get('id').value,
        name: this.formGroup.get('name').value
      });
    }
    return;
  }

  private buildForm() {
    const maxNameLength = 25;
    this.formGroup = this.formBuilder.group({
      id: '',
      name: ['', Validators.maxLength(maxNameLength)],
      crit: ''
    });
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      if (control.getError('required')) {
        error = 'Please, type a name for the project.';
      } else {
        error = 'The name of the project shall not exceed 25 characters.';
      }
    }
    return error;
  }

  public onReset() {
    this.projects$ = this.projectsService.getProjectList();
    return;
  }
}
