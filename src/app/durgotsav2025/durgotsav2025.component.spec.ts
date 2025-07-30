import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Durgotsav2025Component } from './durgotsav2025.component';

describe('Durgotsav2025Component', () => {
  let component: Durgotsav2025Component;
  let fixture: ComponentFixture<Durgotsav2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Durgotsav2025Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Durgotsav2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
