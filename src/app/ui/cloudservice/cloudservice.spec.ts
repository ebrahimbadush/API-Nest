import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cloudservice } from './cloudservice';

describe('Cloudservice', () => {
  let component: Cloudservice;
  let fixture: ComponentFixture<Cloudservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cloudservice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cloudservice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
