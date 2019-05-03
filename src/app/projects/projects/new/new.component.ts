import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(private router: Router, private projectsService: ProjectsService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const maxNameLength = 25;
    this.formGroup = this.formBuilder.group({
      id: '',
      name: ['', [Validators.required, Validators.maxLength(maxNameLength)]]
    });
  }

  public onNew() {
    this.projectsService.newProject({ id: this.formGroup.get('id').value, name: this.formGroup.get('name').value });
    this.router.navigateByUrl('/projects');
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
}
