import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserVideosComponent } from './user-videos.component';

describe('UserVideosComponent', () => {
  let component: UserVideosComponent;
  let fixture: ComponentFixture<UserVideosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
