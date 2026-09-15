import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Us } from './us';

describe('Us', () => {
  let component: Us;
  let fixture: ComponentFixture<Us>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Us],
    }).compileComponents();

    fixture = TestBed.createComponent(Us);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
