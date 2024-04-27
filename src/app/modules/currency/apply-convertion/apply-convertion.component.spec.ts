import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyConvertionComponent } from './apply-convertion.component';

describe('ApplyConvertionComponent', () => {
  let component: ApplyConvertionComponent;
  let fixture: ComponentFixture<ApplyConvertionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyConvertionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyConvertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
