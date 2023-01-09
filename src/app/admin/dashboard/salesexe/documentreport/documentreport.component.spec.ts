import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentreportComponent } from './documentreport.component';

describe('DocumentreportComponent', () => {
  let component: DocumentreportComponent;
  let fixture: ComponentFixture<DocumentreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
