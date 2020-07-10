import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffdetailsComponent } from './staffdetails.component';

describe('StaffdetailsComponent', () => {
  let component: StaffdetailsComponent;
  let fixture: ComponentFixture<StaffdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
