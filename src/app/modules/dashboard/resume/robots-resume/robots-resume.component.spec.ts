import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotsResumeComponent } from './robots-resume.component';

describe('RobotsResumeComponent', () => {
  let component: RobotsResumeComponent;
  let fixture: ComponentFixture<RobotsResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotsResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
