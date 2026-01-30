import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corosel } from './corosel';

describe('Corosel', () => {
  let component: Corosel;
  let fixture: ComponentFixture<Corosel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corosel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corosel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
