import { ComponentFixture, TestBed } from '@angular/core/testing';
import {render, screen} from '@testing-library/angular';

import { TopBarComponent } from './top-bar.component';

describe('HeroDetailComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should render topBar', async () => {
    await render(TopBarComponent);

    const titlelement = screen.getByText('Star War Heros');

    expect(titlelement).toBeInTheDocument();

    const homeButtonElement = screen.getByText('DashBoard');

    expect(homeButtonElement).toBeInTheDocument();

    const heroButtonElement = screen.getByText('Heroes');

    expect(heroButtonElement).toBeInTheDocument();
  });
});
