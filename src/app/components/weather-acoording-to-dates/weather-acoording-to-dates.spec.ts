import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAcoordingToDates } from './weather-acoording-to-dates';

describe('WeatherAcoordingToDates', () => {
  let component: WeatherAcoordingToDates;
  let fixture: ComponentFixture<WeatherAcoordingToDates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherAcoordingToDates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherAcoordingToDates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
