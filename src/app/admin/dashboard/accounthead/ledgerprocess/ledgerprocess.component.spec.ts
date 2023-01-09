import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerprocessComponent } from './ledgerprocess.component';

describe('LedgerprocessComponent', () => {
  let component: LedgerprocessComponent;
  let fixture: ComponentFixture<LedgerprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerprocessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgerprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
