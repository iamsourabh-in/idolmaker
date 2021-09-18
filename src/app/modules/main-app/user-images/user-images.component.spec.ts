import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserImagesComponent } from './user-images.component';

describe('UserImagesComponent', () => {
  let component: UserImagesComponent;
  let fixture: ComponentFixture<UserImagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
