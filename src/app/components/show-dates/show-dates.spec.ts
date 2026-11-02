import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDates } from './show-dates';

describe('ShowDates', () => {
  let component: ShowDates;
  let fixture: ComponentFixture<ShowDates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowDates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
