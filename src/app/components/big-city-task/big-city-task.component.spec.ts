import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCityTaskComponent } from './big-city-task.component';

describe('BigCityTaskComponent', () => {
  let component: BigCityTaskComponent;
  let fixture: ComponentFixture<BigCityTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigCityTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigCityTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
