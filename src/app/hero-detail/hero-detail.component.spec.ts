import { ComponentFixture, TestBed } from '@angular/core/testing';
import {render, screen, fireEvent} from '@testing-library/angular';

import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should render detail', async () => {
    await render(HeroDetailComponent);

    expect(screen.getByText('Hero name: ')).toBeInTheDocument();
  });

  it('test hover interaction', async () => {
    await render(HeroDetailComponent);

    const element = screen.getByText('Hello');
    fireEvent.mouseOver(element);
    const styles = getComputedStyle(element);
    
    expect(styles.width).toBe('50rem');

  })
});
