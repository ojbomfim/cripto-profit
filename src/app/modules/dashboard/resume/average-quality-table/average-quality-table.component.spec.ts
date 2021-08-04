import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageQualityTableComponent } from './average-quality-table.component';

describe('AverageQualityTableComponent', () => {
  let component: AverageQualityTableComponent;
  let fixture: ComponentFixture<AverageQualityTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageQualityTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageQualityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
