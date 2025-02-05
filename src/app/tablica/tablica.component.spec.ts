import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablicaComponent } from './tablica.component';

describe('TablicaComponent', () => {
  let component: TablicaComponent;
  let fixture: ComponentFixture<TablicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
