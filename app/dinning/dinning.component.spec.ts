import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinningComponent } from './dinning.component';

describe('DinningComponent', () => {
  let component: DinningComponent;
  let fixture: ComponentFixture<DinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
