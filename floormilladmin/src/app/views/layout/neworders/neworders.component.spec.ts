import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewordersComponent } from './neworders.component';

describe('NewordersComponent', () => {
  let component: NewordersComponent;
  let fixture: ComponentFixture<NewordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
