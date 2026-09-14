import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelIzq } from './panel-izq';

describe('PanelIzq', () => {
  let component: PanelIzq;
  let fixture: ComponentFixture<PanelIzq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelIzq],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelIzq);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
