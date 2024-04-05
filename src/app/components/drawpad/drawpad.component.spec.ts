import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawpadComponent } from './drawpad.component';

describe('DrawpadComponent', () => {
  let component: DrawpadComponent;
  let fixture: ComponentFixture<DrawpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawpadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrawpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
