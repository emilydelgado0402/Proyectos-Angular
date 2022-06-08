import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSecundarioComponent } from './about-secundario.component';

describe('AboutSecundarioComponent', () => {
  let component: AboutSecundarioComponent;
  let fixture: ComponentFixture<AboutSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSecundarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
