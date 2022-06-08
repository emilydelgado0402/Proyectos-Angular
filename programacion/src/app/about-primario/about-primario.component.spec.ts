import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPrimarioComponent } from './about-primario.component';

describe('AboutPrimarioComponent', () => {
  let component: AboutPrimarioComponent;
  let fixture: ComponentFixture<AboutPrimarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPrimarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPrimarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
