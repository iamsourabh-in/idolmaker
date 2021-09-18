import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddPostWidgetComponent } from './add-post-widget.component';

describe('AddPostWidgetComponent', () => {
  let component: AddPostWidgetComponent;
  let fixture: ComponentFixture<AddPostWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
