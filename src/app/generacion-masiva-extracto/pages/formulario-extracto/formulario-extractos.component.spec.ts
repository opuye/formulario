import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioExtractosComponent } from './formulario-extractos.component';

describe('FormularioExtractosComponent', () => {
  let component: FormularioExtractosComponent;
  let fixture: ComponentFixture<FormularioExtractosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioExtractosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioExtractosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
