import { TestBed } from '@angular/core/testing';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AllHeroesComponent } from './all-heroes/all-heroes.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'movie-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('movie-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('movie-project app is running!');
  });

  it('it can navigate to routes', async () => {
    await render(AppComponent, {
      declarations: [HeroListComponent, HeroListComponent, TopBarComponent, AllHeroesComponent],
      routes: [
        {
          path: '',
          children: [
            {
              path: '',
              component: HeroListComponent,
            },
            {
              path: 'detail/:id',
              component: HeroDetailComponent,
            },
            {
              path: 'heroes',
              component: AllHeroesComponent,
            },
          ]
        }
      ]
  });

    fireEvent.click(screen.getByRole('img'));
    await waitForElementToBeRemoved(HeroListComponent);
    expect(HeroDetailComponent).toBeInTheDocument();

    fireEvent.click(screen.getByText('Heroes'));
    await waitForElementToBeRemoved(HeroDetailComponent);
    expect(AllHeroesComponent).toBeInTheDocument();
  })
});
