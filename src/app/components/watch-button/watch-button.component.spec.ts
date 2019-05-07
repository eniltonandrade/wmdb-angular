import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchbuttonComponent } from './watch-button.component';

describe('WatchbuttonComponent', () => {
  let component: WatchbuttonComponent;
  let fixture: ComponentFixture<WatchbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WatchbuttonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
