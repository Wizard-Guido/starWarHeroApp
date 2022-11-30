import { ComponentFixture, TestBed } from '@angular/core/testing';
import {render, screen, fireEvent} from '@testing-library/angular';

import { HeroListComponent } from './hero-list.component';

describe('HeroDetailComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should render list', async () => {
    await render(HeroListComponent);

    const element = screen.getByTestId('heroBox')

    expect(element).toBeInTheDocument();
  });

});
