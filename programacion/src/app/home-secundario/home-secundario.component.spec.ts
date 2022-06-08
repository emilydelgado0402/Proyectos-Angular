import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSecundarioComponent } from './home-secundario.component';

describe('HomeSecundarioComponent', () => {
  let component: HomeSecundarioComponent;
  let fixture: ComponentFixture<HomeSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSecundarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
