import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dataengineering } from './dataengineering';

describe('Dataengineering', () => {
  let component: Dataengineering;
  let fixture: ComponentFixture<Dataengineering>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dataengineering]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dataengineering);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
