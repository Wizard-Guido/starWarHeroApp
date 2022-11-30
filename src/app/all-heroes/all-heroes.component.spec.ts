import { ComponentFixture, TestBed } from '@angular/core/testing';
import {render, screen} from '@testing-library/angular';
import '@testing-library/jest-dom';

import { AllHeroesComponent } from './all-heroes.component';

describe('AllHeroesComponent', () => {
  let component: AllHeroesComponent;
  let fixture: ComponentFixture<AllHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heroes', async () => {
    await render(AllHeroesComponent);

    expect(screen.getByText('Items per page')).toBeInTheDocument();
  });
});
