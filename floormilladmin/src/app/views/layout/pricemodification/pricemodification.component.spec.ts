import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricemodificationComponent } from './pricemodification.component';

describe('PricemodificationComponent', () => {
  let component: PricemodificationComponent;
  let fixture: ComponentFixture<PricemodificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricemodificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricemodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
