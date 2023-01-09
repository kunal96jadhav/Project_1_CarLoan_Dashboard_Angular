import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicatewithcustomerComponent } from './communicatewithcustomer.component';

describe('CommunicatewithcustomerComponent', () => {
  let component: CommunicatewithcustomerComponent;
  let fixture: ComponentFixture<CommunicatewithcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicatewithcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicatewithcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
