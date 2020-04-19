import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFormsComponent } from './submit-forms.component';

describe('SubmitFormsComponent', () => {
  let component: SubmitFormsComponent;
  let fixture: ComponentFixture<SubmitFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
