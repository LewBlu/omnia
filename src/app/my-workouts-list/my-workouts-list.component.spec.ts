import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkoutsListComponent } from './my-workouts-list.component';

describe('MyWorkoutsListComponent', () => {
  let component: MyWorkoutsListComponent;
  let fixture: ComponentFixture<MyWorkoutsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWorkoutsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkoutsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
