import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserAboutComponent } from './user-about.component';

describe('UserAboutComponent', () => {
  let component: UserAboutComponent;
  let fixture: ComponentFixture<UserAboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
