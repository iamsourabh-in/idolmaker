import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserTimelineComponent } from './user-timeline.component';

describe('UserTimelineComponent', () => {
  let component: UserTimelineComponent;
  let fixture: ComponentFixture<UserTimelineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
