import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerFormComponent } from './viewer-form.component';

describe('ViewerFormComponent', () => {
  let component: ViewerFormComponent;
  let fixture: ComponentFixture<ViewerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
