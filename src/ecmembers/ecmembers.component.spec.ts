import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcmembersComponent } from './ecmembers.component';

describe('EcmembersComponent', () => {
  let component: EcmembersComponent;
  let fixture: ComponentFixture<EcmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcmembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
