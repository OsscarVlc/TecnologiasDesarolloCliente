import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDer } from './panel-der';

describe('PanelDer', () => {
  let component: PanelDer;
  let fixture: ComponentFixture<PanelDer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelDer],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelDer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
