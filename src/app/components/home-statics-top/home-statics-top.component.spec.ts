import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStaticsTopComponent } from './home-statics-top.component';

describe('HomeStaticsTopComponent', () => {
  let component: HomeStaticsTopComponent;
  let fixture: ComponentFixture<HomeStaticsTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeStaticsTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStaticsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
