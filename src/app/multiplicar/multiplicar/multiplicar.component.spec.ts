import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicarComponent } from './multiplicar.component';

describe('MultiplicarComponent', () => {
  let component: MultiplicarComponent;
  let fixture: ComponentFixture<MultiplicarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicarComponent]
    });
    fixture = TestBed.createComponent(MultiplicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
