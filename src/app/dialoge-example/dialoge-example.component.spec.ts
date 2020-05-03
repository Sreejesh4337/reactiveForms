import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeExampleComponent } from './dialoge-example.component';

describe('DialogeExampleComponent', () => {
  let component: DialogeExampleComponent;
  let fixture: ComponentFixture<DialogeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
