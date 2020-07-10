import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingordersComponent } from './pendingorders.component';

describe('PendingordersComponent', () => {
  let component: PendingordersComponent;
  let fixture: ComponentFixture<PendingordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
