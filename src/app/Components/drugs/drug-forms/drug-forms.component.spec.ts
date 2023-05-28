import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugFormsComponent } from './drug-forms.component';

describe('DrugFormsComponent', () => {
  let component: DrugFormsComponent;
  let fixture: ComponentFixture<DrugFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
