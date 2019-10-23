import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { Hero } from '../shared/hero';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the heroes component', () => {
    expect(component).toBeTruthy();
  });

  it('should have hero as `Windstorm`.', () => {
    fixture.detectChanges();
    expect(component.hero.id).toBe(1);
    expect(component.hero.name).toBe('Windstorm');
  });
  
  it('should display hero in title capitalized.', () => {
    fixture.detectChanges();

    expect(compiled.querySelector('h2').textContent).toContain('WINDSTORM Details');
    // console.log(compiled.querySelector('div :last')); 
    // console.log(compiled.querySelector('div').textContent); 
    expect(compiled.querySelector('div').textContent).toBe('id: 1');
  });

});
