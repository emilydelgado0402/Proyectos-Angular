import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTarjetaComponent } from './home-tarjeta.component';

describe('HomeTarjetaComponent', () => {
  let component: HomeTarjetaComponent;
  let fixture: ComponentFixture<HomeTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
